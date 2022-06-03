import Vite from '../assets/vitejs.png'
import React from '../assets/reactjs.png'
import ReactIcons from '../assets/react-icons.png'
import ReactRouter from '../assets/react-router.png'
import WindiCSS from '../assets/windicss.png'

export const Home = () => {
    return (
        <div className={'flex justify-center items-center h-screen bg-light-200'}>
            <div className={'flex justify-center flex-col items-center w-2/3'}>
                <h1 className={'text-8xl font-bold'}>157 MB</h1>
                <h1 className={'text-2xl font-semibold mt-5'}>Yes that number is correct and uncompressed</h1>
                <h1 className={'text-xl font-light text-gray-500'}>For the love of small bundle sizes</h1>
                <div className={'grid grid-cols-2 mt-10 gap-3'}>
                    <Card
                        title={'Vite'}
                        icon={Vite}
                        body={'We use vite to achieve a crazy small bundle size and blazing fast performance'}
                        url={'https://vitejs.dev'}
                    />
                    <Card
                        title={'WindiCSS'}
                        icon={WindiCSS}
                        body={'Design that UI faster with CSS-in-JS. Plus it do be quick.'}
                        url={'https://windicss.org'}
                    />
                    <Card
                        title={'React Router'}
                        icon={ReactRouter}
                        body={'Ah a classic for React Devs. This guy is a very fast and powerful routing library for React.'}
                        url={'https://reactrouterdotcom.fly.dev/'}
                    />
                    <Card
                        title={'React Icons'}
                        icon={ReactIcons}
                        body={'Need some icons? React Icons has you covered. All the icons all the time. This library has it all.'}
                        url={'https://react-icons.github.io/react-icons'}
                    />
                    <Card
                        lg={true}
                        title={'React'}
                        icon={React}
                        body={'And of course, the one and only React. This dude is the star of the show in these parts. Want to build a website? React. Single Page Application? React. So what are you waiting for? Start that project!'}
                        url={'https://reactjs.org'}
                    />
                </div>
            </div>
        </div>
    )
}

const Card = (props: { lg?: boolean, title: string, icon: string, body: string, url: string }) => {
    if (props.lg) {
        return (
            <div className={'col-span-2 bg-white rounded-lg shadow-md p-5'}>
                <div className={'flex justify-start items-center'}>
                    <h1 className={'text-xl font-semibold mr-2'}>{props.title}</h1>
                    <img src={props.icon} className={'w-10 h-auto'} />
                </div>
                <p className={'text-ms font-light text-gray-500 w-full'}>{props.body}</p>
                <div className={'flex justify-end items-center mt-3'}>
                    <a href={props.url} target={'_blank'} className={'text-blue-500 underline font-light text-sm'}>Learn More</a>
                </div>
            </div>
        )
    } else {
        return (
            <div className={'col-span-1 bg-white rounded-lg shadow-md p-5'}>
                <div className={'flex justify-start items-center'}>
                    <h1 className={'text-xl font-semibold mr-2'}>{props.title}</h1>
                    <img src={props.icon} className={'w-auto h-8'} />
                </div>
                <p className={'text-ms font-light text-gray-500 w-90'}>{props.body}</p>
                <div className={'flex justify-end items-center mt-3'}>
                    <a href={props.url} target={'_blank'} className={'text-blue-500 underline font-light text-sm'}>Learn More</a>
                </div>
            </div>
        )
    }
}