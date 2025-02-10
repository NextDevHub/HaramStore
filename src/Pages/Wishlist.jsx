import { useWishlist } from "../context/WishlistContext";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import FlashSaleItem from "../components/common/components/FlashSaleItem";
import { ITEMS } from "../components/common/functions/items";
import RedTitle from "../components/common/components/RedTitle";
import WhiteButton from "../components/common/components/WhiteButton";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";
import i18n from "../components/common/components/LangConfig";
import Notification from "../components/common/components/Notification";

function Wishlist() {
  const { wishlistItems } = useWishlist();
  const { moveAllToCart } = useCart();

  const [notification, setNotification] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleClick = async () => {
    if (wishlistItems.length === 0) return;
    
    setIsProcessing(true);
    const state = await moveAllToCart(wishlistItems);
    
    setNotification({
      message: state ? i18n.t("Snackbar.movedToCart") : i18n.t("Snackbar.inCart"),
      severity: state ? "success" : "info",
    });
    
    setTimeout(() => {
      setIsProcessing(false)
      setNotification(null);
    }, 2000); // Allow re-click after 2s
  };

  const getRelatedItems = () => {
    const wishlistTypes = new Set(wishlistItems.map((item) => item.type));
    let relatedItems = ITEMS.filter(
      (item) => wishlistTypes.has(item.type) && !wishlistItems.some((wish) => wish.id === item.id)
    ).slice(0, 5);
    
    return relatedItems.length > 0 ? relatedItems : ITEMS.filter((item) => item.price > 1000).slice(0, 5);
  };

  const relatedItems = getRelatedItems();

  return (
    <div className="flex flex-col md:mx-32 mt-28">
      <div className="mx-auto md:mx-2 my-20">
        <div className="flex justify-around md:justify-between items-center md:mr-6 mb-12">
          <h2 className="text-lg">
            {i18n.t("wishlist.title")} ({wishlistItems.length})
          </h2>
          <WhiteButton
            name={i18n.t("whiteButtons.moveAllToBag")}
            onClick={handleClick}
            disabled={wishlistItems.length === 0 || isProcessing}
          />
        </div>

        <Grid container spacing={3} justifyContent="center" alignItems="center">
          {wishlistItems.map((item, index) => (
            <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
              <FlashSaleItem
                item={item}
                index={index}
                totalItems={wishlistItems.length}
                stars={item.stars}
                rates={item.rates}
                isInWishlistPage
              />
            </Grid>
          ))}
        </Grid>
      </div>

      <div className="flex justify-between items-center md:mr-6 mx-4">
        <RedTitle title={i18n.t("wishlist.justForYou")} color="black" />
        <Link to="/allProducts">
          <WhiteButton name={i18n.t("whiteButtons.seeAll")} />
        </Link>
      </div>

      <div className="relative overflow-x-auto overflow-y-hidden flex justify-start items-center md:h-[400px]">
        <motion.div
          className="flex gap-2 md:gap-12"
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
        >
          {relatedItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
            >
              <FlashSaleItem
                item={item}
                index={index}
                totalItems={relatedItems.length}
                stars={item.stars}
                rates={item.rates}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {notification && <Notification message={notification.message} severity={notification.severity} />}
    </div>
  );
}

export default Wishlist;
