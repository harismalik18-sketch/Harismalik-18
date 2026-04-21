export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center w-full h-full min-h-[200px]">
      <div className="snowball relative w-[13em] h-[13em] text-base">
        <div className="snowball__ball absolute inset-0 m-auto w-[3.5em] h-[3.5em] rounded-full bg-white shadow-[0_0_0.5em_0.1em_rgba(0,0,0,0.1)] animate-[ball_1.2s_ease-in-out_infinite] z-10">
          <div className="snowball__inner-shadow absolute inset-[-0.2em] rounded-full overflow-hidden animate-[ballInnerShadow_1.2s_ease-in-out_infinite]">
            <div className="absolute top-[-50%] left-[-10%] w-[120%] h-[100%] bg-gradient-to-b from-transparent to-black/[0.13] rounded-[50%]" />
          </div>
          <div className="snowball__texture absolute inset-0 rounded-full overflow-hidden opacity-30 animate-[ballTexture_1.2s_ease-in-out_infinite]">
            <div className="absolute inset-[-100%] bg-[radial-gradient(circle,_white_1px,_transparent_1px)] bg-[length:0.4em_0.4em]" />
          </div>
        </div>

        <div className="snowball__outer-shadow absolute inset-0 m-auto w-[3.5em] h-[3.5em] rounded-full animate-[ballOuterShadow_1.2s_ease-in-out_infinite]">
          <div className="absolute bottom-[-3em] left-1/2 -translate-x-1/2 w-[3em] h-[0.6em] rounded-[50%] bg-black/[0.07] blur-[2px]" />
        </div>

        <div className="snowball__track absolute inset-0 m-auto w-[13em] h-[13em] rounded-full border-[3px] border-gray-200/60" />

        <div className="snowball__track-cover absolute inset-0 m-auto w-[13em] h-[13em] animate-[trackCover_1.2s_ease-in-out_infinite]">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-background rounded-t-full" />
        </div>
      </div>
    </div>
  );
}
