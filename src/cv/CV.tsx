import { TitleBar } from "./components/TitleBar.tsx";
import { forwardRef } from "react";

export const CV = forwardRef<HTMLDivElement>((_, ref) => {
    return <div ref={ref}>
        <TitleBar/>
    </div>
})
