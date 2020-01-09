import { getFlowers } from "./FlowerProvider.js";
import FlowerList from "./FlowerList.js";
import { getShops } from "./ShopProvider.js";
import ShopList from "./ShopList.js";
import { getDistributors } from "./DistributorProvider.js";

getFlowers()
    .then(() => FlowerList())

getShops()
    .then(() => getDistributors())
    .then(() => ShopList())