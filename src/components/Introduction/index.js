import * as React from 'react';
import {connect} from 'react-redux';
import NamePopover from "./NamePopover";


class Introduction extends React.Component {
    static propTypes = {};

    static defaultProps = {};

    render() {
        const currentLocation = {
            city: "Tokyo",
            country: "Japan"
        };

        const currentCompany = {
            name: "GMO Research",
            url: "https://gmo-research.com/",
            location: "Tokyo, Japan"
        };

        const today = new Date();
        const age = (today.getFullYear() - 1993) - ((today.getMonth() >= 10 && today.getDay() >= 24) ? 0 : 1);

        const aurimas_exp = [["UU", "u", "put"], ["r", "r", "rat"], ["ih", "i", "it"], ["m", "m", "me"], ["uh", "u", "up"], ["s", "s", "so"]];
        const niekis_exp = [["Nj", "n", "new"], ["ie", "ea", "near"], ["k", "k", "sky"], ["i", "i", "hit"], ["s", "ce", "peace"]];

        return <>
            <section className="lg:mt-20 py-12 bg-gray-50 overflow-hidden md:py-20 lg:py-24">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <svg
                        className="absolute top-full right-full transform translate-x-1/3 -translate-y-1/4 lg:translate-x-1/2 xl:-translate-y-1/2"
                        width="404" height="404" fill="none" viewBox="0 0 404 404" role="img"
                        aria-labelledby="svg-workcation">
                        <defs>
                            <pattern id="ad119f34-7694-4c31-947f-5c9d249b21f3" x="0" y="0" width="20" height="20"
                                     patternUnits="userSpaceOnUse">
                                <rect x="0" y="0" width="4" height="4" className="text-gray-200"
                                      fill="currentColor"/>
                            </pattern>
                        </defs>
                        <rect width="404" height="404" fill="url(#ad119f34-7694-4c31-947f-5c9d249b21f3)"/>
                    </svg>

                    <div className="relative">
                        <blockquote className="mt-10">
                            <div
                                className="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
                                <p>
                                    Hi! My name is <NamePopover name="Aurimas" spelling="A UU - r ih - m uh s"
                                                                spelling_exp={aurimas_exp} katakana="ア ウ リ マ ス"
                                                                pronunciation_url={process.env.PUBLIC_URL + '/aurimas_pronunciation.mp3'}/>
                                    &nbsp;&nbsp;<NamePopover name="Niekis" spelling="Nj ie - k - i s"
                                                             spelling_exp={niekis_exp} katakana="ニ エ キ ス"
                                                             pronunciation_url={process.env.PUBLIC_URL + '/niekis_pronunciation.mp3'}/>.
                                    I am {age} years old, originally from
                                    &nbsp;<a className="text-blue-700" target="_blank" rel="noreferrer"
                                             href="https://en.wikipedia.org/wiki/Kaunas">Kaunas</a>,
                                    &nbsp;<a className="text-blue-700" target="_blank" rel="noreferrer"
                                             href="https://en.wikipedia.org/wiki/Lithuania">Lithuania</a> 🇱🇹.
                                    &nbsp;I am currently living in <a className="text-blue-700" target="_blank"
                                                                      rel="noreferrer"
                                                                      href="https://en.wikipedia.org/wiki/{currentLocation.city}">{currentLocation.city}, {currentLocation.country}</a>.
                                    &nbsp;I am specialising mostly in Software and Electronics engineering.
                                    <br/>
                                    <br/>
                                    At the moment I am working at <a className="text-blue-700" target="_blank"
                                                                     rel="noreferrer"
                                                                     href={currentCompany.url}>{currentCompany.name}</a> company
                                    in {currentCompany.location}.
                                </p>
                            </div>
                        </blockquote>
                    </div>
                </div>
            </section>
        </>;
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Introduction);
