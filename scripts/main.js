import { getFlowers } from "./FlowerProvider.js";
import FlowerList from "./FlowerList.js";
import { getShops } from "./ShopProvider.js";
import ShopList from "./ShopList.js";
import { getDistributors } from "./DistributorProvider.js";
import { getNurseries } from "./NurseryProvider.js";
import { getNurseriesFlowers } from "./NurseriesFlowersProvider.js"
import { getNurseriesDistributors } from "./NurseriesDistributorsProvider.js"

getFlowers()
    .then(() => FlowerList())

getShops()
    .then(() => getDistributors())
    .then(() => getNurseries())
    .then(() => getNurseriesFlowers())
    .then(() => getNurseriesDistributors())
    .then(() => ShopList())
