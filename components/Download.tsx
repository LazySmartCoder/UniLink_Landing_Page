import AndroidMockup from "./magicui/android-mockup";
import ShinyButton from "./magicui/shiny-button";

export default function Download() {
  return (
    <section className="w-full py-24 bg-background" id="download">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-heading bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400">
            Be Heard like never before!
          </h2>
          <p className="text-lg text-muted-foreground max-w-md mb-8">
            The UniLink experience is currently available exclusively for Android.
            Download the APK to join our private beta and start connecting today.
          </p>

          {/* Download button */}
          <a href="https://www.dropbox.com/scl/fi/b6h8e6oxj7vw7jbrpm5qo/UniLink.apk?rlkey=egdpe8cbdecbh972q3d6ie7ol&st=s0hq8e15&dl=1" download>
            <ShinyButton>
              Download Securely
            </ShinyButton>
          </a>
        </div>

        <div className="flex justify-center">
          <AndroidMockup />
        </div>
      </div>
    </section>
  );
}
