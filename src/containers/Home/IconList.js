import {
  IconLazo,
  IconMagicWand,
  IconDropper,
  IconCorrectiveBrush,
  IconCloningTool,
  IconBurn,
  IconMask,
  IconPen,
} from "@/components/Icons";

const IconList = [
  {
    name: "Lasso",
    shortDescription: "Allows you to make freehand selections.",
    callToAction: "Why a Lasso?",
    description:
      "To use the lasso like a real CowBoy you need a rope ending in a closed shape that captures the 'outline' of what you want to take.",
    icon: IconLazo,
  },
  {
    name: "Magic Wand",
    shortDescription: "Select areas of the image with similar colors.",
    callToAction: "Why a Magic Wand?",
    description:
      "If you outline freehand for hours, finding yourself in front of the perfect image to do it automatically thanks to a color difference is a kind of magic!",
    icon: IconMagicWand,
  },
  {
    name: "Eyedropper",
    shortDescription: "Samples the colors of an image.",
    callToAction: "What's this lil pacifier?",
    description:
      "The dropper allows you to collect a color sample and store it in a bottle to be able to replicate it a number of times at a later time.",
    icon: IconDropper,
  },
  {
    name: "Healing Brush",
    shortDescription: "Corrects defects and imperfections.",
    callToAction: "Why is it a patch?",
    description:
      "As when we put on a flesh-colored patch, it recalls the physical action of repairing a portion of the canvas by 'putting a patch' that respects the pattern of it to be repaired, so that the outlines of the retouch are not visible.",
    icon: IconCorrectiveBrush,
  },
  {
    name: "Clone Stamp",
    shortDescription: "Draw using pixels from another part of the image.",
    callToAction: "Why a stamp?",
    description:
      "It emulates the possibility of transferring an image created on a matrix to another two-dimensional support by pressing a stamp: this operation made it possible to inking the matrix and reproduce the starting image for multiple.",
    icon: IconCloningTool,
  },
  {
    name: "Burn",
    shortDescription: "Darkens some areas of the image.",
    callToAction: "Why is it an OK emoji?",
    description:
      "It represents a hand that directs the light in a certain area to burn it, a technique used in photography to darken some parts of the original shot to obtain contrasting effects.",
    icon: IconBurn,
  },
  {
    name: "Mask",
    shortDescription: "Adds a layer mask.",
    callToAction: "What is it?",
    description:
      "Trivially a cardboard with a hole in the center! To intervene on a portion of the image in a massive way, for example with an airbrush, but while preserving some areas from the intervention, it was necessary to mask them with a cardboard applied to the areas to be protected.",
    icon: IconMask,
  },
  {
    name: "Pen",
    shortDescription: "Draw paths for anchor points.",
    callToAction: "What a strange pen!",
    description:
      "It is in fact the stylization of an ink nib: it recalls the ink passage of the sketch, which it forces you to detach the nib from the sheet when the direction of the stroke changes, a point that becomes an anchor for the next stroke.",
    icon: IconPen,
  },
];

export default IconList;
