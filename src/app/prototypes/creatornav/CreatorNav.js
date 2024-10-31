import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";

const CreatorNav = () => {
  const { RiveComponent } = useRive({
    src: "/riv/creatornav.riv",
    stateMachines: "State Machine 1",
    autoplay: true,
    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.Center
    })
  });

  return <RiveComponent />;
 }

 export default CreatorNav;