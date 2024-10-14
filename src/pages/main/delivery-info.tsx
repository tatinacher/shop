import { Box } from "@mui/material";
import { InfoCard } from "../../ui/info-card";

import { UndoIcon, HeadphonesIcon, DeliveryIcon } from "../../app/icons";

const iconStyle = {
  width: "120px",
  height: "120px",
};

const infoList = [
  {
    title: "Free Delivery",
    description: "World-wide free delivery",
    icon: <DeliveryIcon style={iconStyle} />,
  },
  {
    title: "Personalized service",
    description: "24 hours, 7 days a week",
    icon: <HeadphonesIcon style={iconStyle} />,
  },
  {
    title: "Free exchange",
    description: "Free exchange on all products",
    icon: <UndoIcon style={iconStyle} />,
  },
];

export function DeliveryInfo() {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      {infoList.map((card) => (
        <InfoCard {...card} />
      ))}
    </Box>
  );
}
