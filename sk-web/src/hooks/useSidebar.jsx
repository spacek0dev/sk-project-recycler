import { useState } from "react"

const useSideBar = () => {
    const [open, setOpen] = useState(false);

    const toggleSidebar = () => {
        setOpen(prev => !!!prev);
    }
    const closeSideBar = () => { setOpen(false) };
    const openSideBar = () => { setOpen(true) };
    return {
        open, openSideBar, closeSideBar, toggleSidebar
    }
}

export default useSideBar;