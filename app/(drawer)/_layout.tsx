import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import CustomDrawer from '@/components/shared/CustomDrawer';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
      drawerContent={CustomDrawer}
      screenOptions={{
        // headerShown: false,
        overlayColor: 'rgba(0,0,0,0.5)',
        drawerActiveTintColor: 'indigo',
        headerShadowVisible: true,
        sceneContainerStyle: {
          backgroundColor: 'white',
        }
      }}>
        <Drawer.Screen
          name="schedule/index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Home',
            title: 'Home',
            drawerIcon: ({ color }) => (
              <FontAwesome name="home" color={color} size={24} />
            )
          }}
        />
        <Drawer.Screen
          name="user/index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'User',
            title: 'User',
            drawerIcon: ({ color }) => (
              <FontAwesome name="user" color={color} size={24} />
            )
          }}
        />
         <Drawer.Screen
          name="(tabs)" // This is the name of the page and must match the url from root
          options={{
            headerShown: true,
            drawerLabel: 'Tabs',
            title: 'Tabs',
            drawerIcon: ({ color }) => (
              <FontAwesome name="indent" color={color} size={24} />
            )
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
