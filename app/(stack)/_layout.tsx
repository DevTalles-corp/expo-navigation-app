import { Stack } from 'expo-router';
const StackLayout = () => {
  return (
    <Stack
      screenOptions={{
        // headerShown: false,
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: 'white',
        },
      }}
    >
      <Stack.Screen
        name="home/index"
        options={{
          title: 'Inicio',
        }}
      />
      <Stack.Screen
        name="products/index"
        options={{
          title: 'Productos',
        }}
      />

      <Stack.Screen
        name="profile/index"
        options={{
          title: 'Perfil',
        }}
      />
      <Stack.Screen
        name="settings/index"
        options={{
          title: 'Ajustes Pantalla',
        }}
      />
    </Stack>
  );
};
export default StackLayout;
