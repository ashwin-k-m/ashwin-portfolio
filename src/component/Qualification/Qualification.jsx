import React, { useState } from 'react';
import './qualification.css';

function Qualification() {
    const [activeTab, setActiveTab] = useState(0);

    const toggleTab = (index) => {
        setActiveTab(index);
    };

    return (
        <section className="qualification section" id="education">
            <h2 className="section__title">Academics</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div
                        className={activeTab === 0 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                        onClick={() => toggleTab(0)}>
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>
                    <div
                        className={activeTab === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                        onClick={() => toggleTab(1)}>
                        <i className="bx bx-note qualification__icon"></i>
                        Certificates
                    </div>
                </div>

                <div className="qualification__sections">
                    {/* Academic Journey Section */}
                    <div className={activeTab === 0 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        {/* Academic Journey Data */}
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Bachelor of Computer Applications</h3>
                                <span className="qualification__subtitle">Mangalore University</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2021 - 2024
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Higher Secondary - Computer Science</h3>
                                <span className="qualification__subtitle">Jawahar Navodaya Vidyalaya</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2019 - 2021
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">High School</h3>
                                <span className="qualification__subtitle">Jawahar Navodaya Vidyalaya</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2016 - 2019
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>

                    {/* Certificates Section */}
                    <div className={activeTab === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        {/* Certificates Data */}
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">React JS for Beginners</h3>
                                <span className="qualification__subtitle"><a href="https://simpli.app.link?%24identity_id=1380047394510800367&channel=android&feature=sharing&type=0&duration=0&source=android&data=eyIkb2dfdGl0bGUiOiJBc2h3aW4gS3VtYXIgTSAgaGFzIHN1Y2Nlc3NmdWxseSBjb21wbGV0ZWQgdGhlIFJlYWN0SlMgZm9yIEJlZ2lubmVycyBvbmxpbmUgY291cnNlLiIsIiRjYW5vbmljYWxfaWRlbnRpZmllciI6Ijc2NDc1MTciLCIkb2dfZGVzY3JpcHRpb24iOiJMZWFybiB0b2RheSdzIG1vc3QgaW4tZGVtYW5kIHNraWxscyBmb3IgZnJlZSBhdCBTa2lsbFVwIGJ5IFNpbXBsaWxlYXJuLiIsIiRvZ19pbWFnZV91cmwiOiJodHRwczpcL1wvY2VydGlmaWNhdGVzLnNpbXBsaWNkbi5uZXRcL3NoYXJlXC83NjQ3NTE3XzcyMzYyNzMxNzMzNzYxNTEwMjcyLnBuZyIsIiRwdWJsaWNseV9pbmRleGFibGUiOiJ0cnVlIiwiJGRlc2t0b3BfdXJsIjoiaHR0cHM6XC9cL3d3dy5zaW1wbGlsZWFybi5jb21cL3NraWxsdXAtY2VydGlmaWNhdGUtbGFuZGluZz90b2tlbj1leUpqYjNWeWMyVmZhV1FpT2lJeE56STFJaXdpWTJWeWRHbG1hV05oZEdWZmRYSnNJam9pYUhSMGNITTZYQzljTDJObGNuUnBabWxqWVhSbGN5NXphVzF3YkdsalpHNHVibVYwWEM5emFHRnlaVnd2TnpZME56VXhOMTgzTWpNMk1qY3pNVGN6TXpjMk1UVXhNREkzTWk1d2JtY2lMQ0oxYzJWeWJtRnRaU0k2SWtGemFIZHBiaUJMZFcxaGNpQk5JQ0o5JnV0bV9zb3VyY2U9c2hhcmVkLWNlcnRpZmljYXRlJnV0bV9tZWRpdW09YXBwX2xtcyZ1dG1fY2FtcGFpZ249c2hhcmVkLWNlcnRpZmljYXRlLXByb21vdGlvbiZyZWZlcnJlcj1odHRwcyUzQSUyRiUyRmNlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0JTJGc2hhcmUlMkY3NjQ3NTE3XzcyMzYyNzMxNzMzNzYxNTEwMjcyLnBuZyIsIiRhbmRyb2lkX3VybCI6Imh0dHBzOlwvXC93d3cuc2ltcGxpbGVhcm4uY29tXC9za2lsbHVwLWNlcnRpZmljYXRlLWxhbmRpbmc%2FdG9rZW49ZXlKamIzVnljMlZmYVdRaU9pSXhOekkxSWl3aVkyVnlkR2xtYVdOaGRHVmZkWEpzSWpvaWFIUjBjSE02WEM5Y0wyTmxjblJwWm1sallYUmxjeTV6YVcxd2JHbGpaRzR1Ym1WMFhDOXphR0Z5WlZ3dk56WTBOelV4TjE4M01qTTJNamN6TVRjek16YzJNVFV4TURJM01pNXdibWNpTENKMWMyVnlibUZ0WlNJNklrRnphSGRwYmlCTGRXMWhjaUJOSUNKOSZ1dG1fc291cmNlPXNoYXJlZC1jZXJ0aWZpY2F0ZSZ1dG1fbWVkaXVtPWFwcF9sbXMmdXRtX2NhbXBhaWduPXNoYXJlZC1jZXJ0aWZpY2F0ZS1wcm9tb3Rpb24mcmVmZXJyZXI9aHR0cHMlM0ElMkYlMkZjZXJ0aWZpY2F0ZXMuc2ltcGxpY2RuLm5ldCUyRnNoYXJlJTJGNzY0NzUxN183MjM2MjczMTczMzc2MTUxMDI3Mi5wbmciLCJzb3VyY2UiOiJhbmRyb2lkIn0%3D">Simplilearn - Link</a></span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2024
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Getting Started with Node JS</h3>
                                <span className="qualification__subtitle"><a href="https://simpli.app.link?%24identity_id=1380047394510800367&channel=android&feature=sharing&type=0&duration=0&source=android&data=eyIkb2dfdGl0bGUiOiJBc2h3aW4gS3VtYXIgTSBoYXMgc3VjY2Vzc2Z1bGx5IGNvbXBsZXRlZCB0aGUgR2V0dGluZyBzdGFydGVkIHdpdGggTm9kZUpTIG9ubGluZSBjb3Vyc2UuIiwiJGNhbm9uaWNhbF9pZGVudGlmaWVyIjoiNzY0ODExMiIsIiRvZ19kZXNjcmlwdGlvbiI6IkxlYXJuIHRvZGF5J3MgbW9zdCBpbi1kZW1hbmQgc2tpbGxzIGZvciBmcmVlIGF0IFNraWxsVXAgYnkgU2ltcGxpbGVhcm4uIiwiJG9nX2ltYWdlX3VybCI6Imh0dHBzOlwvXC9jZXJ0aWZpY2F0ZXMuc2ltcGxpY2RuLm5ldFwvc2hhcmVcLzc2NDgxMTJfNzIzNjI3MzE3MzM3NzY2NzE4NTkucG5nIiwiJHB1YmxpY2x5X2luZGV4YWJsZSI6InRydWUiLCIkZGVza3RvcF91cmwiOiJodHRwczpcL1wvd3d3LnNpbXBsaWxlYXJuLmNvbVwvc2tpbGx1cC1jZXJ0aWZpY2F0ZS1sYW5kaW5nP3Rva2VuPWV5SmpiM1Z5YzJWZmFXUWlPaUl4TnpRMklpd2lZMlZ5ZEdsbWFXTmhkR1ZmZFhKc0lqb2lhSFIwY0hNNlhDOWNMMk5sY25ScFptbGpZWFJsY3k1emFXMXdiR2xqWkc0dWJtVjBYQzl6YUdGeVpWd3ZOelkwT0RFeE1sODNNak0yTWpjek1UY3pNemMzTmpZM01UZzFPUzV3Ym1jaUxDSjFjMlZ5Ym1GdFpTSTZJa0Z6YUhkcGJpQkxkVzFoY2lCTkluMCZ1dG1fc291cmNlPXNoYXJlZC1jZXJ0aWZpY2F0ZSZ1dG1fbWVkaXVtPWFwcF9sbXMmdXRtX2NhbXBhaWduPXNoYXJlZC1jZXJ0aWZpY2F0ZS1wcm9tb3Rpb24mcmVmZXJyZXI9aHR0cHMlM0ElMkYlMkZjZXJ0aWZpY2F0ZXMuc2ltcGxpY2RuLm5ldCUyRnNoYXJlJTJGNzY0ODExMl83MjM2MjczMTczMzc3NjY3MTg1OS5wbmciLCIkYW5kcm9pZF91cmwiOiJodHRwczpcL1wvd3d3LnNpbXBsaWxlYXJuLmNvbVwvc2tpbGx1cC1jZXJ0aWZpY2F0ZS1sYW5kaW5nP3Rva2VuPWV5SmpiM1Z5YzJWZmFXUWlPaUl4TnpRMklpd2lZMlZ5ZEdsbWFXTmhkR1ZmZFhKc0lqb2lhSFIwY0hNNlhDOWNMMk5sY25ScFptbGpZWFJsY3k1emFXMXdiR2xqWkc0dWJtVjBYQzl6YUdGeVpWd3ZOelkwT0RFeE1sODNNak0yTWpjek1UY3pNemMzTmpZM01UZzFPUzV3Ym1jaUxDSjFjMlZ5Ym1GdFpTSTZJa0Z6YUhkcGJpQkxkVzFoY2lCTkluMCZ1dG1fc291cmNlPXNoYXJlZC1jZXJ0aWZpY2F0ZSZ1dG1fbWVkaXVtPWFwcF9sbXMmdXRtX2NhbXBhaWduPXNoYXJlZC1jZXJ0aWZpY2F0ZS1wcm9tb3Rpb24mcmVmZXJyZXI9aHR0cHMlM0ElMkYlMkZjZXJ0aWZpY2F0ZXMuc2ltcGxpY2RuLm5ldCUyRnNoYXJlJTJGNzY0ODExMl83MjM2MjczMTczMzc3NjY3MTg1OS5wbmciLCJzb3VyY2UiOiJhbmRyb2lkIn0%3D">Simplilearn - Link</a></span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2024
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Introduction to Express JS</h3>
                                <span className="qualification__subtitle"><a href="https://simpli.app.link?%24identity_id=1380047394510800367&channel=android&feature=sharing&type=0&duration=0&source=android&data=eyIkb2dfdGl0bGUiOiJBc2h3aW4gS3VtYXIgTSBoYXMgc3VjY2Vzc2Z1bGx5IGNvbXBsZXRlZCB0aGUgSW50cm9kdWN0aW9uIHRvIEV4cHJlc3MgSlMgb25saW5lIGNvdXJzZS4iLCIkY2Fub25pY2FsX2lkZW50aWZpZXIiOiI3ODgzMjE5IiwiJG9nX2Rlc2NyaXB0aW9uIjoiTGVhcm4gdG9kYXkncyBtb3N0IGluLWRlbWFuZCBza2lsbHMgZm9yIGZyZWUgYXQgU2tpbGxVcCBieSBTaW1wbGlsZWFybi4iLCIkb2dfaW1hZ2VfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvNzg4MzIxOV83MjM2MjczMTczOTEwNTkzOTE1OC5wbmciLCIkcHVibGljbHlfaW5kZXhhYmxlIjoidHJ1ZSIsIiRkZXNrdG9wX3VybCI6Imh0dHBzOlwvXC93d3cuc2ltcGxpbGVhcm4uY29tXC9za2lsbHVwLWNlcnRpZmljYXRlLWxhbmRpbmc%2FdG9rZW49ZXlKamIzVnljMlZmYVdRaU9pSTBORFV5SWl3aVkyVnlkR2xtYVdOaGRHVmZkWEpzSWpvaWFIUjBjSE02WEM5Y0wyTmxjblJwWm1sallYUmxjeTV6YVcxd2JHbGpaRzR1Ym1WMFhDOXphR0Z5WlZ3dk56ZzRNekl4T1Y4M01qTTJNamN6TVRjek9URXdOVGt6T1RFMU9DNXdibWNpTENKMWMyVnlibUZ0WlNJNklrRnphSGRwYmlCTGRXMWhjaUJOSW4wJnV0bV9zb3VyY2U9c2hhcmVkLWNlcnRpZmljYXRlJnV0bV9tZWRpdW09YXBwX2xtcyZ1dG1fY2FtcGFpZ249c2hhcmVkLWNlcnRpZmljYXRlLXByb21vdGlvbiZyZWZlcnJlcj1odHRwcyUzQSUyRiUyRmNlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0JTJGc2hhcmUlMkY3ODgzMjE5XzcyMzYyNzMxNzM5MTA1OTM5MTU4LnBuZyIsIiRhbmRyb2lkX3VybCI6Imh0dHBzOlwvXC93d3cuc2ltcGxpbGVhcm4uY29tXC9za2lsbHVwLWNlcnRpZmljYXRlLWxhbmRpbmc%2FdG9rZW49ZXlKamIzVnljMlZmYVdRaU9pSTBORFV5SWl3aVkyVnlkR2xtYVdOaGRHVmZkWEpzSWpvaWFIUjBjSE02WEM5Y0wyTmxjblJwWm1sallYUmxjeTV6YVcxd2JHbGpaRzR1Ym1WMFhDOXphR0Z5WlZ3dk56ZzRNekl4T1Y4M01qTTJNamN6TVRjek9URXdOVGt6T1RFMU9DNXdibWNpTENKMWMyVnlibUZ0WlNJNklrRnphSGRwYmlCTGRXMWhjaUJOSW4wJnV0bV9zb3VyY2U9c2hhcmVkLWNlcnRpZmljYXRlJnV0bV9tZWRpdW09YXBwX2xtcyZ1dG1fY2FtcGFpZ249c2hhcmVkLWNlcnRpZmljYXRlLXByb21vdGlvbiZyZWZlcnJlcj1odHRwcyUzQSUyRiUyRmNlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0JTJGc2hhcmUlMkY3ODgzMjE5XzcyMzYyNzMxNzM5MTA1OTM5MTU4LnBuZyIsInNvdXJjZSI6ImFuZHJvaWQifQ%3D%3D">Simplilearn - Link</a></span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2025
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Introduction to MongoDB</h3>
                                <span className="qualification__subtitle"><a href="https://simpli.app.link?%24identity_id=1380047394510800367&channel=android&feature=sharing&type=0&duration=0&source=android&data=eyIkb2dfdGl0bGUiOiJBc2h3aW4gS3VtYXIgTSBoYXMgc3VjY2Vzc2Z1bGx5IGNvbXBsZXRlZCB0aGUgSW50cm9kdWN0aW9uIHRvIE1vbmdvREIgb25saW5lIGNvdXJzZS4iLCIkY2Fub25pY2FsX2lkZW50aWZpZXIiOiI3ODgzNzY2IiwiJG9nX2Rlc2NyaXB0aW9uIjoiTGVhcm4gdG9kYXkncyBtb3N0IGluLWRlbWFuZCBza2lsbHMgZm9yIGZyZWUgYXQgU2tpbGxVcCBieSBTaW1wbGlsZWFybi4iLCIkb2dfaW1hZ2VfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvNzg4Mzc2Nl83MjM2MjczMTczOTExNTkzMzMxMi5wbmciLCIkcHVibGljbHlfaW5kZXhhYmxlIjoidHJ1ZSIsIiRkZXNrdG9wX3VybCI6Imh0dHBzOlwvXC93d3cuc2ltcGxpbGVhcm4uY29tXC9za2lsbHVwLWNlcnRpZmljYXRlLWxhbmRpbmc%2FdG9rZW49ZXlKamIzVnljMlZmYVdRaU9pSTBNVEE0SWl3aVkyVnlkR2xtYVdOaGRHVmZkWEpzSWpvaWFIUjBjSE02WEM5Y0wyTmxjblJwWm1sallYUmxjeTV6YVcxd2JHbGpaRzR1Ym1WMFhDOXphR0Z5WlZ3dk56ZzRNemMyTmw4M01qTTJNamN6TVRjek9URXhOVGt6TXpNeE1pNXdibWNpTENKMWMyVnlibUZ0WlNJNklrRnphSGRwYmlCTGRXMWhjaUJOSW4wJnV0bV9zb3VyY2U9c2hhcmVkLWNlcnRpZmljYXRlJnV0bV9tZWRpdW09YXBwX2xtcyZ1dG1fY2FtcGFpZ249c2hhcmVkLWNlcnRpZmljYXRlLXByb21vdGlvbiZyZWZlcnJlcj1odHRwcyUzQSUyRiUyRmNlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0JTJGc2hhcmUlMkY3ODgzNzY2XzcyMzYyNzMxNzM5MTE1OTMzMzEyLnBuZyIsIiRhbmRyb2lkX3VybCI6Imh0dHBzOlwvXC93d3cuc2ltcGxpbGVhcm4uY29tXC9za2lsbHVwLWNlcnRpZmljYXRlLWxhbmRpbmc%2FdG9rZW49ZXlKamIzVnljMlZmYVdRaU9pSTBNVEE0SWl3aVkyVnlkR2xtYVdOaGRHVmZkWEpzSWpvaWFIUjBjSE02WEM5Y0wyTmxjblJwWm1sallYUmxjeTV6YVcxd2JHbGpaRzR1Ym1WMFhDOXphR0Z5WlZ3dk56ZzRNemMyTmw4M01qTTJNamN6TVRjek9URXhOVGt6TXpNeE1pNXdibWNpTENKMWMyVnlibUZ0WlNJNklrRnphSGRwYmlCTGRXMWhjaUJOSW4wJnV0bV9zb3VyY2U9c2hhcmVkLWNlcnRpZmljYXRlJnV0bV9tZWRpdW09YXBwX2xtcyZ1dG1fY2FtcGFpZ249c2hhcmVkLWNlcnRpZmljYXRlLXByb21vdGlvbiZyZWZlcnJlcj1odHRwcyUzQSUyRiUyRmNlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0JTJGc2hhcmUlMkY3ODgzNzY2XzcyMzYyNzMxNzM5MTE1OTMzMzEyLnBuZyIsInNvdXJjZSI6ImFuZHJvaWQifQ%3D%3D">Simplilearn - Link</a></span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2025
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Qualification;
