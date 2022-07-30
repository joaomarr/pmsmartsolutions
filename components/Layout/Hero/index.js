import { HomeTitle } from "../../Titles/HomeTitle";

export function Hero() {
    return (
        <div className="h-screen w-100 bg-bg-hero bg-center bg-fixed">
            <div className="w-100 h-full bg-gradient-to-br from-blue-500 to-yellow-500/50">
                <HomeTitle />
            </div>
        </div>
    );
}