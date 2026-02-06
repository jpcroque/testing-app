import { Page, Card, Layout, Text, Button } from "@shopify/polaris";

export default function Index() {
  return (
    <Page title="Testing App - Polaris">
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <Text as="h2" variant="headingMd">
              ¡Polaris funcionando en tu App! 🚀
            </Text>

            <p>Este es tu primer contenido personalizado.</p>

            <Button primary>Botón de prueba</Button>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
