import styles from "./styles.module.css";
import { Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { API_URL } from "../../../api/api";
import { Link } from "react-router-dom";

export default function CartItems({ items, onIncrease, onDecrease, onRemove }) {
  return (
    <Box className={styles.list}>
      {items.map((item) => {
        const discount = Number(item.discont_price);
        const hasDiscount = Number.isFinite(discount) && discount > 0;
        const to = `/products/${item.id}`;
        return (
          <Box key={item.id} className={styles.card}>
            <Link to={to} className={styles.imageLink} aria-label={`Open ${item.title}`}>
              <img className={styles.image} src={`${API_URL}${item.image}`} alt={item.title} />
            </Link>

            <Box className={styles.body}>
              <Link to={to} className={styles.titleLink}>
                <Typography className={styles.title}>{item.title}</Typography>
              </Link>


              <Box className={styles.bottomRow}>
                <Box className={styles.qty}>
                  <IconButton className={styles.qtyBtn} aria-label="decrease" onClick={() => onDecrease(item.id)}>
                    <RemoveIcon />
                  </IconButton>

                  <Box className={styles.qtyValue}>
                    <Typography className={styles.qtyText}>{item.qty}</Typography>
                  </Box>

                  <IconButton className={styles.qtyBtn} aria-label="increase" onClick={() => onIncrease(item.id)}>
                    <AddIcon />
                  </IconButton>
                </Box>

                <Box className={styles.price}>
                  {hasDiscount ? (
                    <>
                      <Typography className={styles.priceNew}>${discount}</Typography>
                      <Typography className={styles.priceOld}>${Number(item.price)}</Typography>
                    </>
                  ) : (
                    <Typography className={styles.priceNew}>${Number(item.price)}</Typography>
                  )}
                </Box>
              </Box>
            </Box>

            <IconButton className={styles.remove} aria-label="remove" onClick={() => onRemove(item.id)}>
              <CloseIcon />
            </IconButton>
          </Box>
        );
      })}
    </Box>
  );
}
