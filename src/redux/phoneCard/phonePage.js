  
const defaultState = [
    {
      "smallInfo": {
        "id": 1,
        "product_name": "Apple iPhone 16 128GB Black",
        "availability": true,
        "price": 60000
      },
      "body": {
        "model": "Apple iPhone 16",
        "storage": "128GB",
        "color": "Чорний",
        "specs": {
          "processor": "A16 Bionic",
          "display": {
            "size": "6.1 дюймів",
            "type": "OLED",
            "resolution": "2532x1170",
            "ppi": "460 ppi"
          },
          "camera": {
            "main": { "megapixels": 12, "aperture": "ƒ/1.6", "features": ["оптична стабілізація зображення"] },
            "ultrawide": { "megapixels": 12, "aperture": "ƒ/2.4", "field_of_view": "120°" },
            "front": { "megapixels": 12, "aperture": "ƒ/2.2" },
            "video_recording": "4K при 60fps"
          },
          "battery": { "capacity": "3200mAh", "fast_charging": "20W", "wireless_charging": { "type": "MagSafe", "power": "15W" } },
          "os": "iOS 17",
          "body": { "material": "Алюміній, скляна задня панель", "water_resistance": "IP68 (до 6 метрів на 30 хвилин)" },
          "connectivity": ["5G", "LTE"]
        },
        "features": [
          "Потужний процесор A16 Bionic для відмінної продуктивності",
          "Яскравий OLED-дисплей з HDR10 та Dolby Vision",
          "12MP основна камера з оптичною стабілізацією",
          "Підтримка відео 4K",
          "5G підтримка та водонепроникність"
        ]
      }
    },
    {
      "smallInfo": {
        "id": 2,
        "product_name": "Samsung Galaxy S22 Ultra 256GB Green",
        "availability": true,
        "price": 75000
      },
      "body": {
        "model": "Samsung Galaxy S22 Ultra",
        "storage": "256GB",
        "color": "Зелений",
        "specs": {
          "processor": "Exynos 2200",
          "display": {
            "size": "6.8 дюймів",
            "type": "Dynamic AMOLED 2X",
            "resolution": "3088x1440",
            "ppi": "500 ppi"
          },
          "camera": {
            "main": { "megapixels": 108, "aperture": "ƒ/1.8", "features": ["оптична стабілізація", "лазерний автофокус"] },
            "ultrawide": { "megapixels": 12, "aperture": "ƒ/2.2", "field_of_view": "120°" },
            "front": { "megapixels": 40, "aperture": "ƒ/2.2" },
            "video_recording": "8K при 24fps"
          },
          "battery": { "capacity": "5000mAh", "fast_charging": "45W", "wireless_charging": { "type": "Qi", "power": "15W" } },
          "os": "Android 12",
          "body": { "material": "Алюміній, скляна задня панель", "water_resistance": "IP68" },
          "connectivity": ["5G", "LTE", "Wi-Fi 6E"]
        },
        "features": [
          "Потужний процесор Exynos 2200",
          "6.8-дюймовий AMOLED дисплей",
          "108MP основна камера",
          "Запис відео 8K",
          "Швидка зарядка 45W та підтримка 5G"
        ]
      }
    },
    {
      "smallInfo": {
        "id": 3,
        "product_name": "Google Pixel 7 128GB White",
        "availability": true,
        "price": 45000
      },
      "body": {
        "model": "Google Pixel 7",
        "storage": "128GB",
        "color": "Білий",
        "specs": {
          "processor": "Google Tensor G2",
          "display": {
            "size": "6.3 дюймів",
            "type": "OLED",
            "resolution": "2400x1080",
            "ppi": "416 ppi"
          },
          "camera": {
            "main": { "megapixels": 50, "aperture": "ƒ/1.9", "features": ["оптична стабілізація"] },
            "ultrawide": { "megapixels": 12, "aperture": "ƒ/2.2", "field_of_view": "114°" },
            "front": { "megapixels": 10.8, "aperture": "ƒ/2.2" },
            "video_recording": "4K при 60fps"
          },
          "battery": { "capacity": "4355mAh", "fast_charging": "30W", "wireless_charging": { "type": "Qi", "power": "21W" } },
          "os": "Android 13",
          "body": { "material": "Алюміній, скло", "water_resistance": "IP68" },
          "connectivity": ["5G", "LTE", "Wi-Fi 6"]
        },
        "features": [
          "Новий Google Tensor G2 для оптимізації",
          "6.3-дюймовий OLED дисплей",
          "50MP основна камера з OIS",
          "Запис відео 4K при 60fps",
          "Підтримка бездротової зарядки та Wi-Fi 6"
        ]
      }
    }
  ];
    
  
  export const phonePageReducer = (state = defaultState, action) => {
      switch (action.type) {
          default:
            return state;
        }
      
  }