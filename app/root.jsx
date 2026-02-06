import { AppProvider } from "@shopify/polaris";
import polarisStyles from "@shopify/polaris/build/esm/styles.css";

export default function App({ children }) {
  return <AppProvider i18n={{}}>{children}</AppProvider>;
}
