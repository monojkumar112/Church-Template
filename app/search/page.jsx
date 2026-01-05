"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { searchPages } from "../data/searchIndex";

const SearchPage = ({ searchParams }) => {
  const [results, setResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Get the search query from URL params
    const query = searchParams?.q || "";
    if (query) {
      setLoading(true);
      setSearchQuery(query);
      // Simulate slight delay for better UX
      setTimeout(() => {
        const foundResults = searchPages(query);
        setResults(foundResults);
        setLoading(false);
      }, 300);
    }
  }, [searchParams]);

  const handleNewSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const newResults = searchPages(searchQuery);
      setResults(newResults);
      // Update URL without full reload
      window.history.pushState(
        {},
        "",
        `/search?q=${encodeURIComponent(searchQuery)}`
      );
    }
  };

  return (
    <>
      <section className="search-banner-section">
        <div className="container">
          <div className="search-banner-wrapper">
            <h1>Search Results</h1>
            <p>Find what your&apos;e looking for across our website</p>
          </div>
        </div>
      </section>

      <section className="search-results-section">
        <div className="container">
          <div className="search-results-wrapper">
            {/* Search Form */}
            <div className="search-form-wrapper">
              <form onSubmit={handleNewSearch}>
                <div className="search-input-group">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search the website..."
                    className="search-input"
                  />
                  <button type="submit" className="search-btn">
                    <FiSearch /> Search
                  </button>
                </div>
              </form>
            </div>

            {/* Results */}
            <div className="search-results">
              {loading ? (
                <div className="loading">Searching...</div>
              ) : results.length > 0 ? (
                <>
                  <div className="results-count">
                    Found <strong>{results.length}</strong> result
                    {results.length !== 1 ? "s" : ""} for &quot;
                    <strong>{searchQuery}</strong>&quot;
                  </div>
                  <div className="results-list">
                    {results.map((result) => (
                      <div key={result.id} className="result-item">
                        <h3>
                          <Link href={result.path}>{result.title}</Link>
                        </h3>
                        <p>{result.description}</p>
                        <div className="result-meta">
                          <a href={result.path} className="result-link">
                            View Page →
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : searchQuery ? (
                <div className="no-results">
                  <p>
                    No results found for &quot;<strong>{searchQuery}</strong>
                    &quot;
                  </p>
                  <p className="no-results-hint">
                    Try searching with different keywords or browse our site
                    navigation.
                  </p>
                </div>
              ) : (
                <div className="no-query">
                  <p>Enter a search term above to find pages on our website.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchPage;
