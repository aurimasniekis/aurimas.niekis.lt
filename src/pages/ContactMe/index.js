import * as React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import emailjs from 'emailjs-com';

function SuccessBox() {
    return <div className="mt-5 rounded-md bg-green-50 p-4">
        <div className="flex">
            <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                     fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"/>
                </svg>
            </div>
            <div className="ml-3">
                <p className="text-sm font-medium text-green-800">
                    Successfully sent
                </p>
            </div>
        </div>
    </div>;
}
function ErrorBox() {
    return <div className="mt-5 rounded-md bg-red-50 p-4">
        <div className="flex">
            <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                </svg>
            </div>
            <div className="ml-3">
                <p className="text-sm font-medium text-red-800">
                    Error happened while trying to sent your message
                </p>
            </div>
        </div>
    </div>;
}

class ContactMePage extends Component {
    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props);

        this.state = {
            sentSuccess: false,
            sentError: false
        }
    }

    sendForm = (e) => {
        e.preventDefault();

        this.setState({sentSuccess: false, sentError: false});

        emailjs.sendForm('service_fqzyt4x', 'template_fvsomlh', e.target, 'user_wtVQ1LQYpCosDRsV3eSyO')
            .then((result) => {
                this.setState({sentSuccess: true, sentError: false});
                e.target.reset();

                setTimeout(() => this.setState({sentSuccess: false, sentError: false}), 5000);
            }, (error) => {
                this.setState({sentSuccess: false, sentError: true});
            });
    };


    render() {
        return <>
            <main>
                {/* Header */}
                <div>
                    <div className="relative z-10 overflow-hidden py-24 lg:py-16">
                        <div className="max-w-7xl mx-auto pl-4 pr-8 sm:px-6 lg:px-8">
                            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">Get
                                in touch</h1>
                        </div>
                    </div>
                </div>

                {/* Contact section */}
                <section className="relative bg-white mb-20" aria-labelledby="contactHeading">
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <svg
                            className="absolute top-0 right-0 transform -translate-y-16 translate-x-1/2 sm:translate-x-1/4 md:-translate-y-24 lg:-translate-y-32"
                            width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
                            <defs>
                                <pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x="0" y="0" width="20"
                                         height="20" patternUnits="userSpaceOnUse">
                                    <rect x="0" y="0" width="4" height="4" className="text-gray-200"
                                          fill="currentColor"/>
                                </pattern>
                            </defs>
                            <rect width="404" height="384" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"/>
                        </svg>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="relative bg-white shadow-xl">
                            <h2 id="contactHeading" className="sr-only">Contact me</h2>

                            <div className="grid grid-cols-1 lg:grid-cols-3">
                                <div
                                    className="relative overflow-hidden py-10 px-6 bg-gradient-to-b from-blue-500 to-blue-600 sm:px-10 xl:p-10">
                                    <div className="absolute inset-0 pointer-events-none sm:hidden" aria-hidden="true">
                                        <svg className="absolute inset-0 w-full h-full" width="343" height="388"
                                             viewBox="0 0 343 388" fill="none" preserveAspectRatio="xMidYMid slice"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                                                fill="url(#linear1)" fillOpacity=".1"/>
                                            <defs>
                                                <linearGradient id="linear1" x1="254.553" y1="107.554" x2="961.66"
                                                                y2="814.66" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#fff"/>
                                                    <stop offset="1" stopColor="#fff" stopOpacity="0"/>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div
                                        className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
                                        aria-hidden="true">
                                        <svg className="absolute inset-0 w-full h-full" width="359" height="339"
                                             viewBox="0 0 359 339" fill="none" preserveAspectRatio="xMidYMid slice"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                                                fill="url(#linear2)" fillOpacity=".1"/>
                                            <defs>
                                                <linearGradient id="linear2" x1="192.553" y1="28.553" x2="899.66"
                                                                y2="735.66" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#fff"/>
                                                    <stop offset="1" stopColor="#fff" stopOpacity="0"/>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div
                                        className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
                                        aria-hidden="true">
                                        <svg className="absolute inset-0 w-full h-full" width="160" height="678"
                                             viewBox="0 0 160 678" fill="none" preserveAspectRatio="xMidYMid slice"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                                                fill="url(#linear3)" fillOpacity=".1"/>
                                            <defs>
                                                <linearGradient id="linear3" x1="192.553" y1="325.553" x2="899.66"
                                                                y2="1032.66" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#fff"/>
                                                    <stop offset="1" stopColor="#fff" stopOpacity="0"/>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-medium text-white">Hi there!</h3>
                                    <p className="mt-6 text-base text-blue-50 max-w-3xl">
                                        Do you have a question for me?<br/>
                                        A suggestion, offer or invitation?
                                        Or perhaps, you’d just like to say hello?
                                    </p>
                                    <p className="mt-6 text-base text-blue-50 max-w-3xl">
                                        You can send me a message through one of my social profiles, enmail, or
                                        use the form on this page.
                                    </p>
                                    <p className="mt-6 text-base text-blue-50 max-w-3xl">
                                        I check my messages and email regularly and will get back to you within 48
                                        hours.
                                    </p>
                                    <p className="mt-6 text-base text-blue-50 max-w-3xl">
                                        Best wishes,<br/>
                                        Aurimas Niekis
                                    </p>
                                    <dl className="mt-8 space-y-6">
                                        <dt><span className="sr-only">Email</span></dt>
                                        <dd className="flex text-base text-blue-50">
                                            <svg className="flex-shrink-0 w-6 h-6 text-blue-200"
                                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                            </svg>
                                            <a href="mailto:aurimas@niekis.lt" className="ml-3">aurimas@niekis.lt</a>
                                        </dd>
                                    </dl>
                                    <ul className="mt-8 flex space-x-12">
                                        <li>
                                            <a className="text-blue-200 hover:text-blue-100"
                                               href="https://t.me/aurimasniekis" target="_blank" rel="noreferrer">
                                                <span className="sr-only">Telegram</span>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg" className="w-6 h-6"
                                                     aria-hidden="true">
                                                    <path
                                                        d="m12 24c6.629 0 12-5.371 12-12s-5.371-12-12-12-12 5.371-12 12 5.371 12 12 12zm-6.509-12.26 11.57-4.461c.537-.194 1.006.131.832.943l.001-.001-1.97 9.281c-.146.658-.537.818-1.084.508l-3-2.211-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953z"
                                                        fill="currentColor"
                                                    />
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="text-blue-200 hover:text-blue-100"
                                               href="https://facebook.com/aurimasniekis" target="_blank"
                                               rel="noreferrer">
                                                <span className="sr-only">Facebook</span>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg" className="w-6 h-6"
                                                     aria-hidden="true">
                                                    <path
                                                        d="M22.258 1H2.242C1.556 1 1 1.556 1 2.242v20.016c0 .686.556 1.242 1.242 1.242h10.776v-8.713h-2.932V11.39h2.932V8.887c0-2.906 1.775-4.489 4.367-4.489 1.242 0 2.31.093 2.62.134v3.037l-1.797.001c-1.41 0-1.683.67-1.683 1.653v2.168h3.362l-.438 3.396h-2.924V23.5h5.733c.686 0 1.242-.556 1.242-1.242V2.242C23.5 1.556 22.944 1 22.258 1"
                                                        fill="currentColor"/>
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="text-blue-200 hover:text-blue-100"
                                               href="https://github.com/aurimasniekis" target="_blank" rel="noreferrer">
                                                <span className="sr-only">GitHub</span>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg" className="w-6 h-6"
                                                     aria-hidden="true">
                                                    <path
                                                        d="M11.999 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.386.6.11.819-.26.819-.578 0-.284-.01-1.04-.017-2.04-3.337.724-4.042-1.61-4.042-1.61-.545-1.386-1.332-1.755-1.332-1.755-1.09-.744.082-.73.082-.73 1.205.086 1.838 1.238 1.838 1.238 1.07 1.833 2.81 1.304 3.493.996.109-.775.419-1.303.762-1.603C7.145 17 4.343 15.97 4.343 11.373c0-1.31.468-2.382 1.236-3.22-.124-.304-.536-1.524.118-3.176 0 0 1.007-.323 3.3 1.23.956-.266 1.983-.4 3.003-.404 1.02.005 2.046.138 3.005.404 2.29-1.553 3.296-1.23 3.296-1.23.655 1.652.243 2.872.12 3.176.77.838 1.233 1.91 1.233 3.22 0 4.61-2.806 5.624-5.478 5.921.43.37.814 1.103.814 2.223 0 1.603-.015 2.898-.015 3.291 0 .321.217.695.825.578C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12.001-12"
                                                        fill="currentColor"/>
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="text-blue-200 hover:text-blue-100"
                                               href="https://twitter.com/aurimasniekis" target="_blank"
                                               rel="noreferrer">
                                                <span className="sr-only">Twitter</span>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg" className="w-6 h-6"
                                                     aria-hidden="true">
                                                    <path
                                                        d="M7.548 22.501c9.056 0 14.01-7.503 14.01-14.01 0-.213 0-.425-.015-.636A10.02 10.02 0 0024 5.305a9.828 9.828 0 01-2.828.776 4.94 4.94 0 002.165-2.724 9.867 9.867 0 01-3.127 1.195 4.929 4.929 0 00-8.391 4.491A13.98 13.98 0 011.67 3.9a4.928 4.928 0 001.525 6.573A4.887 4.887 0 01.96 9.855v.063a4.926 4.926 0 003.95 4.827 4.917 4.917 0 01-2.223.084 4.93 4.93 0 004.6 3.42A9.88 9.88 0 010 20.289a13.941 13.941 0 007.548 2.209"
                                                        fill="currentColor"/>
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="text-blue-200 hover:text-blue-100"
                                               href="https://linkedin.com/in/aurimasniekis" target="_blank"
                                               rel="noreferrer">
                                                <span className="sr-only">LinkedIn</span>
                                                <svg width="24" height="24" viewBox="0 0 512 512" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg" className="w-6 h-6"
                                                     aria-hidden="true">
                                                    <path
                                                        d="m475.074219 0h-438.148438c-20.394531 0-36.925781 16.53125-36.925781 36.925781v438.148438c0 20.394531 16.53125 36.925781 36.925781 36.925781h438.148438c20.394531 0 36.925781-16.53125 36.925781-36.925781v-438.148438c0-20.394531-16.53125-36.925781-36.925781-36.925781zm-293.464844 387h-62.347656v-187.574219h62.347656zm-31.171875-213.1875h-.40625c-20.921875 0-34.453125-14.402344-34.453125-32.402344 0-18.40625 13.945313-32.410156 35.273437-32.410156 21.328126 0 34.453126 14.003906 34.859376 32.410156 0 18-13.53125 32.402344-35.273438 32.402344zm255.984375 213.1875h-62.339844v-100.347656c0-25.21875-9.027343-42.417969-31.585937-42.417969-17.222656 0-27.480469 11.601563-31.988282 22.800781-1.648437 4.007813-2.050781 9.609375-2.050781 15.214844v104.75h-62.34375s.816407-169.976562 0-187.574219h62.34375v26.558594c8.285157-12.78125 23.109375-30.960937 56.1875-30.960937 41.019531 0 71.777344 26.808593 71.777344 84.421874zm0 0"
                                                        fill="currentColor"/>
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                {/* Contact form */}
                                <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                                    <h3 className="text-lg font-medium text-gray-900">Send me a message</h3>

                                    {this.state.sentSuccess && <SuccessBox/>}
                                    {this.state.sentError && <ErrorBox/>}

                                    <form onSubmit={this.sendForm}
                                          className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                                        <div className="sm:col-span-2">
                                            <label htmlFor="fullname"
                                                   className="block text-base font-medium text-warmGray-900">Full
                                                Name</label>
                                            <div className="mt-1">
                                                <input type="text" name="user_name" id="fullname" required={true}
                                                       className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 border-warmGray-300 rounded-md"/>
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="email"
                                                   className="block text-sm font-medium text-warmGray-900">Email</label>
                                            <div className="mt-1">
                                                <input id="email" name="user_email" type="email" autoComplete="email"
                                                       className="py-3 px-4 block w-full shadow-sm text-warmGray-900 focus:ring-blue-500 focus:border-blue-500 border-warmGray-300 rounded-md"/>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between">
                                                <label htmlFor="phone"
                                                       className="block text-sm font-medium text-warmGray-900">Phone</label>
                                                <span id="phone-optional"
                                                      className="text-sm text-warmGray-500">Optional</span>
                                            </div>
                                            <div className="mt-1">
                                                <input type="text" name="contact_number" id="phone" autoComplete="tel" required={false}
                                                       className="py-3 px-4 block w-full shadow-sm text-warmGray-900 focus:ring-blue-500 focus:border-blue-500 border-warmGray-300 rounded-md"
                                                       aria-describedby="phone-optional"/>
                                            </div>
                                        </div>
                                        <div className="sm:col-span-2">
                                            <label htmlFor="subject"
                                                   className="block text-base font-medium text-warmGray-900">Subject</label>
                                            <div className="mt-1">
                                                <input type="text" name="subject" id="subject" required={true}
                                                       className="py-3 px-4 block w-full shadow-sm text-warmGray-900 focus:ring-blue-500 focus:border-blue-500 border-warmGray-300 rounded-md"/>
                                            </div>
                                        </div>
                                        <div className="sm:col-span-2">
                                            <div className="flex justify-between">
                                                <label htmlFor="message"
                                                       className="block text-base font-medium text-warmGray-900">Message</label>
                                                <span id="message-max" className="text-sm text-warmGray-500">Max. 500 characters</span>
                                            </div>
                                            <div className="mt-1">
                                                    <textarea id="message" name="message" rows="4"
                                                              className="py-3 px-4 block w-full shadow-sm text-warmGray-900 focus:ring-blue-500 focus:border-blue-500 border-warmGray-300 rounded-md"
                                                              aria-describedby="message-max"/>
                                            </div>
                                        </div>
                                        <div className="sm:col-span-2 sm:flex sm:justify-end">
                                            <button type="submit"
                                                    className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:w-auto">
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ContactMePage);
