export default function ScrollingBanner() {
  return (
    <div className="relative overflow-hidden whitespace-nowrap">
      <div
        className="inline-block min-w-full whitespace-nowrap text-stone-800"
        style={{
          animation: "scroll 30s linear infinite", // Adjust 30s to control the speed
          whiteSpace: "nowrap",
        }}
      >
        <style>
          {`
            @keyframes scroll {
              0% { transform: translateX(100%); }
              100% { transform: translateX(-100%); }
            }
          `}
        </style>
        <div className="text-xl">
          <span className=" mx-4">
            {"‧₊˚ ⋅ product design ‧₊˚ "}
          </span>
          <span className=" mx-4">
            {"branding"}
          </span>
          <span className=" mx-4">
            {"✧･ﾟ ux research:*"}
          </span>
          <span className="mx-4">
            {" ੈ✩visual design‧₊˚"}
          </span>
          <span className="mx-4">
            {" motion design‧₊˚"}
          </span>

          <span className="mx-4">
            {" ੈ✩design systems‧₊˚"}
          </span>
        </div>
      </div>
    </div>
  );
}
