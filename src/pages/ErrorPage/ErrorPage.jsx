

const ErrorPage = () => {
    return (
        <div className="h-screen bg-slate-300 text-center flex flex-col justify-center items-center gap-4">
            <h1 className="text-4xl font-semibold">Opps! 404</h1>
            <h1 className="text-5xl font-bold">You are lost!</h1>
            <a href="/" className='bg-violet-500 py-1 px-3 rounded-full text-black font-bold'>Go Home</a>
        </div>
    );
};

export default ErrorPage;