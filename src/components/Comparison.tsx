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
        <div className="bg-indigo-600 rounded-xl w-1/2 p-20 flex flex-col justify-center">
          <div className="mb-8">
            <h2 className="text-5xl font-semibold text-gray-300s">
              <span className="text-gray-200">The </span>
              <AuroraText colors={["#fee2e2", "#f87171", "#f87171", "#f87171"]}>
                Art of Perfection
              </AuroraText>
              <span className="text-gray-200"> in Every Stroke</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {contentBoxes.map((box, index) => (
              <div
                key={index}
                className="space-y-2 bg-indigo-500 p-3 rounded-xl"
              >
                <h3 className="font-semibold text-lg mb-2  text-white">
                  {box.title}
                </h3>
                <p className="text-gray-300 text-sm">{box.description}</p>
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
