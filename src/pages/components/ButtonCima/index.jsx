export default function ButtonCima(){
  const handleScrollToTop = () => {
     window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <div className="fixed bottom-6 right-6 bg-slate-50 rounded-full flex p-1 cursor-pointer">
      <button onClick={handleScrollToTop}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
    </div>
  );
}