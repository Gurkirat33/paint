import {
  ImageComparison,
  ImageComparisonImage,
  ImageComparisonSlider,
} from "./image-comparison";
import { AuroraText } from "./ui/aurora-text";

export default function ImageComparisonBasic() {
  const contentBoxes = [
    {
      title: "Why Details Matter",
      description:
        "We believe your space should tell your story. That's why we focus on the subtle details that transform good into exceptional.",
    },
    {
      title: "Our Approach",
      description:
        "Premium materials, master craftsmanship, and an eye for what makes each project unique. We don't just paint walls—we create environments.",
    },
    {
      title: "See the Difference",
      description:
        "The slider shows more than just a transformation—it shows our commitment to elevating everyday spaces into something extraordinary.",
    },
    {
      title: "Quality Guaranteed",
      description:
        "Every project comes with our signature attention to detail and commitment to excellence that sets us apart from the rest.",
    },
  ];

  return (
    <div className="primary-color section-container-top">
      <div className="flex gap-4">
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-xl w-1/2 p-16 flex flex-col justify-center border border-slate-700/50">
          <div className="mb-12">
            <h2 className="text-5xl font-semibold leading-tight">
              <span className="text-gray-200">The </span>
              <AuroraText colors={["#fee2e2", "#f87171", "#f87171", "#f87171"]}>
                Art of Perfection
              </AuroraText>
              <span className="text-gray-200"> in Every Stroke</span>
            </h2>
            {/* <p className="text-gray-400 mt-6 text-lg">
              Experience the transformation that comes from meticulous craftsmanship and premium quality.
            </p> */}
          </div>

          <div className="space-y-6">
            {contentBoxes.map((box, index) => (
              <div
                key={index}
                className="flex gap-4 items-start group hover:translate-x-2 transition-transform duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-red-500/20">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-xl mb-2 text-white group-hover:text-red-400 transition-colors">
                    {box.title}
                  </h3>
                  <p className="text-gray-400 text-base leading-relaxed">{box.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <ImageComparison className="w-1/2 rounded-xl" enableHover>
          <ImageComparisonImage
            src="https://motion-primitives.com/mp_dark.png"
            className="grayscale"
            alt="Standard Finish"
            position="right"
          />
          <ImageComparisonImage
            src="https://motion-primitives.com/mp_light.png"
            alt="Our Premium Finish"
            position="left"
          />
          <ImageComparisonSlider className="w-0.5 bg-white/30 backdrop-blur-xs">
            <div className="absolute top-1/2 left-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
          </ImageComparisonSlider>
        </ImageComparison>
      </div>
    </div>
  );
}
