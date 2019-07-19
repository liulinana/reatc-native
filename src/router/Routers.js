import AppContainer from "../../AppContainer";
import Blink from "../pages/Blink";

/**
 * 路由另一种配置格式
 * 例如:const router = {
        Home: AppContainer,
        Details: Blink,
        ss: Touchables
    };
 */

const router = {
    Home: {
        screen: AppContainer,
    },
    Details: {
        screen: Blink,
    },
};

export default router