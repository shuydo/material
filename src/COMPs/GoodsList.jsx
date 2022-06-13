import Grid from '@mui/material/Grid';

import GoodsItem from './GoodsItem';

const GoodsList = props => {
  const { goods, setOrder } = props;

  return (
    // <div className="goods-list col-md-8">   <div className="row">
    <Grid container spacing={2}>
      {goods.map(item => (
        <GoodsItem key={item.id} setOrder={setOrder} {...item} />
      ))}
    </Grid>
  );
};

export default GoodsList;
