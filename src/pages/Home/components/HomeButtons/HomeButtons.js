import React from "react";
import GlowButton from "../../../../components/Navbar/GlowButton/GlowButton";
import { MdOutlineDeliveryDining, MdAddShoppingCart } from "react-icons/md";

function HomeButtons() {
  return (
    <div className="flex justify-between glow-buttons space-x-10 pt-10 me-2">
      <GlowButton content="Order Now" icon={MdAddShoppingCart} />
      <GlowButton content="Free Delivery" icon={MdOutlineDeliveryDining} />
    </div>
  );
}

export default HomeButtons;
