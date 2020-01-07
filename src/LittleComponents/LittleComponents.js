import React from 'react'
import './lc.css'

export const Btn = ({text}) => {
    return <button className="btn">{text}</button>
}

export const Heading = ({text}) => {
    return <h2 className="heading">{text}</h2>
}
export const Logo = ({onPageChange}) => {
    return (
        <div className="logo" onClick={()=> onPageChange('home')}>
            <img src={require('./logo/logo2.png')} alt=""/>
        </div>
    )
}

export const PageHeaderr = ({title}) => {
    return (
        <header>
            <h1 className="heading-main">{title}</h1>
        </header>
    )
}

export const About = () => {
    return (
        <div className="details">
            <div className="text">
                <p>I am Salman Ashraf, a web developer from Nigeria,
                    and I'm currently studying computer science in the 
                    University of Ibadan. I try my posible best to build 
                    stunning websites out of HTML5, CSS3, 
                    JavaScript with React.js and Node.js.
                    I love solving problems and i don't
                     quit until a problem gets solved.
                </p>
            </div>
            <div className="abilities">
                <div className="block">
                    <div className="title">HTML5</div>
                    <div className="bar">
                        <div className="grade before1">
                            <div className="percent">95%</div>
                        </div>
                    </div>
                </div>
                <div className="block">
                    <div className="title">CSS3 & SASS</div>
                    <div className="bar">
                        <div className="grade before2">
                            <div className="percent">95%</div>
                        </div>
                    </div>
                </div>
                <div className="block">
                    <div className="title">JavaScript (React.js)</div>
                    <div className="bar">
                        <div className="grade before3">
                            <div className="percent">80%</div>
                        </div>
                    </div>
                </div>
                <div className="block">
                    <div className="title">Node.js</div>
                    <div className="bar">
                        <div className="grade before4">
                            <div className="percent">70%</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const PageHeader = () => {
    return (
        <div className="p-header">
            <div className="cont">
                <div className="top">
                    <img alt="" src={require('./logo/logo2.png')} />
                </div>
            </div>
        </div>
    )
}


const scroll = () => {
    window.scroll(0, -1000)
}

export const ScrollUp = () => {
    return (
        <div className="scroller" onClick={scroll}> >> </div>
    )
}


export const Person1 = () => {
    return (
        <div className="person">
            <div className="img">
                <img alt="" src={require('./testmonial/t1.png')} />
            </div>
            <p className="complement">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Neque officiis repellendus voluptas exercitationem numquam 
                modi? Quisquam aliquid consequatur ipsa adipisci.
            </p>
            <div className="name">
                JOHN DOE
            </div>
            <div className="job">
                BUssiness man
            </div>
        </div>
    )
}
export const Person2 = () => {
    return (
        <div className="person">
            <div className="img">
                <img alt="" src={require('./testmonial/t2.png')} />
            </div>
            <p className="complement">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Neque officiis repellendus voluptas exercitationem numquam 
                modi? Quisquam aliquid consequatur ipsa adipisci.
            </p>
            <div className="name">
                Daniel Wilson
            </div>
            <div className="job">
                Developer
            </div>
        </div>
    )
}
export const Person3 = () => {
    return (
        <div className="person">
            <div className="img">
                <img alt="" src={require('./testmonial/t3.jpeg')} />
            </div>
            <p className="complement">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Neque officiis repellendus voluptas exercitationem numquam 
                modi? Quisquam aliquid consequatur ipsa adipisci.
            </p>
            <div className="name">
                Samir Khan
            </div>
            <div className="job">
                Art work
            </div>
        </div>
    )
}
