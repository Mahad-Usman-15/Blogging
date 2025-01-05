export default function Footer() {
    return (
        <footer className=" text-xl sm:text-2xl w-full h-full flex justify-center items-center bg-blue-300 text-blue-600 text-center py-4 mt-auto relative ">
            <p >&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        </footer>
    )
}