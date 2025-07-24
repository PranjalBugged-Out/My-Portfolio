import { gridItems } from "@/data";
import BentoGridDynamic, { BentoGridItemDynamic } from "./BentoGridDynamic";

const Grid = () => {
  return (
    <section id="about">
      <BentoGridDynamic className="w-full py-20">
        {gridItems.map((item, i) => (
          <BentoGridItemDynamic
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            // remove icon prop
            // remove original classname condition
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGridDynamic>
    </section>
  );
};

export default Grid;
