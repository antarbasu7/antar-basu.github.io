import { Bounce } from "react-awesome-reveal";
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from "recharts";


const MySkills = () => {

    const data = [
        {
            "tech": "Frontend",
            "know": 80,
            "fullMark": 100
        },
        {
            "tech": "Backend",
            "know": 90,
            "fullMark": 100
        },
        {
            "tech": "DevOps",
            "know": 60,
            "fullMark": 100
        },
        {
            "tech": "Blockchain",
            "know": 70,
            "fullMark": 100
        }
    ]

    return (
        <div className="my-20 lg:px-36 px-5" id="skills" >
            <div>
                <h2 className="text-3xl font-bold">My Skills</h2>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 py-5">
                <div className="grid md:grid-cols-3 grid-cols-1 gap-3" >
                <Bounce>
                        <div className="space-y-2 shadow-xl p-5 bg-slate-100">
                            <div className="flex items-center gap-2">
                                <img className="h-8 rounded-md" src="https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png?f=webp" alt="" />
                                <h4 className="text-2xl font-semibold" >React Js</h4>
                            </div>
                            <div className="flex items-center gap-2 justify-between">
                                <progress id="file" value="85" max="100" className="react-progress"> </progress>
                                <h5 className="text-2xl font-bold" >85%</h5>
                            </div>
                        </div>
                    </Bounce>

                    <Bounce>
                        <div className="space-y-2 shadow-xl p-5 bg-slate-100">
                            <div className="flex items-center gap-2">
                                <img className="h-8" src="https://w1.pngwing.com/pngs/885/534/png-transparent-green-grass-nodejs-javascript-react-mean-angularjs-logo-symbol-thumbnail.png" alt="" />
                                <h4 className="text-2xl font-semibold" >Node Js</h4>
                            </div>
                            <div className="flex items-center gap-2 justify-between">
                                <progress id="file" value="90" max="100" className="node-progress"> </progress>
                                <h5 className="text-2xl font-bold" >90%</h5>
                            </div>
                        </div>
                    </Bounce>

                    <Bounce>
                        <div className="space-y-2 shadow-xl p-5 bg-slate-100">
                            <div className="flex items-center gap-2">
                                <img className="h-8" src="https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png" alt="" />
                                <h4 className="text-2xl font-semibold" >Express Js</h4>
                            </div>
                            <div className="flex items-center gap-2 justify-between">
                                <progress id="file" value="90" max="100" className="express-progress"> </progress>
                                <h5 className="text-2xl font-bold" >90%</h5>
                            </div>
                        </div>
                    </Bounce>

                    <Bounce>
                        <div className="space-y-2 shadow-xl p-5 bg-slate-100">
                            <div className="flex items-center gap-2">
                                <img className="h-8" src="https://images.prismic.io/turing/652ec31afbd9a45bcec81965_Top_Features_in_Next_js_13_7f9a32190f.webp?auto=format,compress" alt="" />
                                <h4 className="text-2xl font-semibold" >Next Js</h4>
                            </div>
                            <div className="flex items-center gap-2 justify-between">
                                <progress id="file" value="80" max="100" className="tailwind-progress"> </progress>
                                <h5 className="text-2xl font-bold" >80%</h5>
                            </div>
                        </div>
                    </Bounce>

                    <Bounce>
                        <div className="space-y-2 shadow-xl p-5 bg-slate-100">
                            <div className="flex items-center">
                                <img className="h-8" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png" alt="" />
                                <h4 className="text-2xl font-semibold" >HTML</h4>
                            </div>

                            <div className="flex items-center gap-2 justify-between">
                                <progress id="file" value="70" max="100" className="html-progress"> </progress>
                                <h5 className="text-2xl font-bold" >70%</h5>
                            </div>
                        </div>
                    </Bounce>

                    <Bounce>
                        <div className="space-y-2 shadow-xl p-5 bg-slate-100">
                            <div className="flex items-center gap-2">
                                <img className="h-8" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png" alt="" />
                                <h4 className="text-2xl font-semibold" >CSS</h4>
                            </div>
                            <div className="flex items-center gap-2 justify-between">
                                <progress id="file" value="65" max="100" className="css-progress"> </progress>
                                <h5 className="text-2xl font-bold" >65%</h5>
                            </div>
                        </div>
                    </Bounce>

                    <Bounce>
                        <div className="space-y-2 shadow-xl p-5 bg-slate-100">
                            <div className="flex items-center gap-2">
                                <img className="h-8 rounded-md" src="https://upload.wikimedia.org/wikipedia/commons/2/2d/TypeScript_ESLint_logo.svg" alt="" />
                                <h4 className="text-2xl font-semibold" >Typescript</h4>
                            </div>
                            <div className="flex items-center gap-2 justify-between">
                                <progress id="file" value="95" max="100" className="js-progress"> </progress>
                                <h5 className="text-2xl font-bold" >95%</h5>
                            </div>
                        </div>
                    </Bounce>

                    <Bounce>
                        <div className="space-y-2 shadow-xl p-5 bg-slate-100">
                            <div className="flex items-center gap-2">
                                <img className="h-8" src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" alt="" />
                                <h4 className="text-2xl font-semibold" >Postgresql</h4>
                            </div>
                            <div className="flex items-center gap-2 justify-between">
                                <progress id="file" value="70" max="100" className="mongodb-progress"> </progress>
                                <h5 className="text-2xl font-bold" >70%</h5>
                            </div>
                        </div>
                    </Bounce>

                    <Bounce>
                        <div className="space-y-2 shadow-xl p-5 bg-slate-100">
                            <div className="flex items-center gap-2">
                                <img className="h-8" src="data:image/png;base64,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" alt="" />
                                <h4 className="text-2xl font-semibold" >MySQL</h4>
                            </div>
                            <div className="flex items-center gap-2 justify-between">
                                <progress id="file" value="85" max="100" className="firebase-progress"> </progress>
                                <h5 className="text-2xl font-bold" >85%</h5>
                            </div>
                        </div>
                    </Bounce>

                    <Bounce>
                        <div className="space-y-2 shadow-xl p-5 bg-slate-100">
                            <div className="flex items-center gap-2">
                                <img className="h-8" src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="" />
                                <h4 className="text-2xl font-semibold" >Git</h4>
                            </div>
                            <div className="flex items-center gap-2 justify-between">
                                <progress id="file" value="65" max="100" className="git-progress"> </progress>
                                <h5 className="text-2xl font-bold" >65%</h5>
                            </div>
                        </div>
                    </Bounce>

                    <Bounce>
                        <div className="space-y-2 shadow-xl p-5 bg-slate-100">
                            <div className="flex items-center gap-2">
                                <img className="h-8" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png" alt="" />
                                <h4 className="text-2xl font-semibold" >Bootstrap</h4>
                            </div>
                            <div className="flex items-center gap-2 justify-between">
                                <progress id="file" value="75" max="100" className="bootstrap-progress"> </progress>
                                <h5 className="text-2xl font-bold" >75%</h5>
                            </div>
                        </div>
                    </Bounce>

                    <Bounce>
                        <div className="space-y-2 shadow-xl p-5 bg-slate-100">
                            <div className="flex items-center gap-2">
                                <img className="h-8" src="https://nightingalehq.ai/knowledgebase/glossary/what-is-aws/aws.png" alt="" />
                                <h4 className="text-2xl font-semibold" >AWS</h4>
                            </div>
                            <div className="flex items-center gap-2 justify-between">
                                <progress id="file" value="60" max="100" className="aws-progress"> </progress>
                                <h5 className="text-2xl font-bold" >60%</h5>
                            </div>
                        </div>
                    </Bounce>
                </div>

                <div className="md:w-full w-[90%] mx-auto">
                    <ResponsiveContainer width="100%">
                        <RadarChart data={data}>
                            <PolarGrid />
                            <PolarAngleAxis dataKey="tech" />
                            <PolarRadiusAxis angle={90} domain={[0, 100]} />
                            <Radar name="Mike" dataKey="know" stroke="#071632" fill="#071632" fillOpacity={0.6} />
                        </RadarChart>
                    </ResponsiveContainer>
                </div>

            </div>
        </div>
    );
};

export default MySkills;