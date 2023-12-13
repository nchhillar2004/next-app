import Image from "next/image";

export default function Home() {
    return (
        <main className="flex">
            <header>
                <div className="header_container">
                    <div className="header_left"></div>
                    <div className="header_center"></div>
                    <div className="header_right"></div>
                </div>
            </header>
            <main><h1>Hello World</h1></main>
            <footer></footer>
        </main>
    );
}
