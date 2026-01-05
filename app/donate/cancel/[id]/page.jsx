'use client'
import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

function Cancel() {
    const { id } = useParams();
    const [donation, setDonation] = useState(null);

    useEffect(() => {
        if (!id) return;
        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/donation/${id}`)
            .then(res => res.json())
            .then(data => {
                setDonation(data);
                console.log(data)
            })
            .catch(err => console.error(err));
    }, [id]);


    const handlePrint = () => {
        const printEl = document.getElementById('printArea');
        if (!printEl) return;

        // collect styles so printed window looks like the app
        const styles = Array.from(document.querySelectorAll('link[rel="stylesheet"], style'))
            .map(node => node.outerHTML)
            .join('\n');

        const printWindow = window.open('', '_blank', 'width=900,height=700');
        printWindow.document.open();
        printWindow.document.write(`
                <html>
                  <head>
                    <title>Print Invoice</title>
                    ${styles}
                    <style>
                      /* ensure body background is white for printing */
                      body { background: #fff; margin: 0; padding: 20px; }
                    </style>
                  </head>
                  <body>
                    ${printEl.innerHTML}
                  </body>
                </html>
            `);
        printWindow.document.close();
        printWindow.focus();

        // give browser a moment to render styles, then print and close
        setTimeout(() => {
            printWindow.print();
            printWindow.close();
        }, 300);
    };

    if (!donation)
        return (
            <div className="container text-center " style={{ marginTop: '120px' }}>
                <div className="spinner-border text-success" role="status"></div>
                <p className="mt-2 text-muted">Loading donation details...</p>
            </div>
        );

    return (
        <div style={{ marginTop: '120px' }}>
            <div id='printArea' className="container my-5 d-flex justify-content-center align-items-center">
                <div className="card shadow-lg" style={{ maxWidth: '600px', width: '100%' }}>
                    <div className="card-header bg-danger text-white text-center py-3 rounded-top ">
                        <h3 className="mb-0 ">Donation Failed</h3>
                    </div>

                    <div className="card-body p-4">
                        <h5 className="text-center text-warning mb-3">
                           ❌ Sorry, <strong>{donation.donor_name}</strong>!  
                            <br />Your donation was canceled please try again.
                        </h5>

                        <table className="table table-bordered mb-4">
                            <tbody>
                                <tr>
                                    <th scope="row">Organization Name</th>
                                    <td>Holy Innocents</td>
                                </tr>
                                <tr>
                                    <th scope="row">Donation ID</th>
                                    <td>#{donation.id}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Amount</th>
                                    <td>
                                        <span className="fw-bold text-success">${donation.amount}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Currency</th>
                                    <td className="text-uppercase">{donation.currency}</td>
                                </tr>
                               
                                <tr>
                                    <th scope="row">Status</th>
                                    <td>
                                        <span className="badge bg-danger">{donation.status}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Date</th>
                                    <td>
                                        {new Date(donation.created_at).toLocaleString('en-US', {
                                            dateStyle: 'medium',
                                            timeStyle: 'short',
                                        })}
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="text-center">
                            <button
                                className="btn btn-outline-success px-4"
                                onClick={handlePrint} // updated handler
                            >
                                🧾 Print Invoice
                            </button>
                        </div>
                    </div>

                    <div className="card-footer text-center text-muted small py-3">
                        Thank you for supporting our mission ❤️
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cancel
