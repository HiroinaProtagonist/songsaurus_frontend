// const LoadingPage = () => {
//     return (
//         <main>
//             <section className="main-container">
//                 <h1 className="header-text">Loading...</h1>
//             </section>
//         </main>
//     );
// };
//
// export default LoadingPage;

export default function LoadingPage() {
    return (
        <div id="loading-splash">
            <div id="loading-splash-spinner" />
            <p>Loading, please wait....</p>
        </div>
    );
}