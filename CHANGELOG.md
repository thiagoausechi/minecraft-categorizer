# 📑 Changelog

## 💡 Planned Features
- Profiles/Accounts
  * You'll be able to login using Google Auth
  * Create any amount of presets
- Categories Group
  * For even more customization, you'll be able to sort out the categories in groups
- Dark Mode
  * Because yes

## 🔨 Known Issues
You can see all known issue [here](https://github.com/thiagoausechi/minecraft-categorizer/issues).
Make sure to report any eventual issue you have experienced. Or leave a feature suggestion so I can improve your experience.

## 🚀 Updates & Releases
## v1.0.4
- You can now search by checked items
  * Use "checked" or "notChecked" to filter those items
- Fixed an error when using the normal version of "not" filters in the search bar that wasn't filtering properly items ([#6](https://github.com/thiagoausechi/minecraft-categorizer/issues/6))
  * Eg.: "notStackable" works as expected, but just "stackable" wasn't working at all
- Replaced "notBlock" keyword with "isItem" in the search engine
- Selected Items are now cleared when changing Presets
- Slightly changed the selected slot aesthetic
- "Dirt Path" is now tagged as Creative Only
- Added a Release Notes
- Changed the image render to "pixelated".
  * This change will make the "look" of the items more like the game
  * Change under review, please show us your feedback

## v1.0.3
- Added Context Menu/Right Click ([#2](https://github.com/thiagoausechi/minecraft-categorizer/issues/2))
  * You can move items easily by choosing the categories under the "Move to" option
  * Use the Context Menu to check/unchek items. See more below
  * "Refund" will move all selected items from their respective categories to the "Items" list
- Added the "Check Items" functionality ([#1](https://github.com/thiagoausechi/minecraft-categorizer/issues/1))
  * All checked items must be in a category
  * All checked items will be saved and loaded with the User Preset
  * We have no opinion on what the checked items might mean to the user
  * It's just an aesthetic reference, like a flag or marking
  * Eg.: You can use it to know which items are already properly placed in the in-game categorizer
- Added a total number of categories when "Reordering Mode" is enabled
- Fixed a visual inconsistent when hovering an item slot
- Fixed a critical error that incorrectly overwritten all category information

## v1.0.2
- Added a "Tip Icon" at the end of the search bar
- Added extra Items information for a better search result
- Item Internal ID now matches with the official game ID
- Improved Tooltip placement, now won't go outside the window

## v1.0.1
- Added 1.19 items
- Updated "Creative Tabs Preset" to include all 1.19 items to their respective categories
- Added Minecraft Version at the page's footer

## v1.0.0
- First release!
- Featuring Drag n' Drop
  * You can drag an item from any source and drop it into another location
  * You can also select multiple items using SHIFT (sequential selection) or CTRL(win)/CMD(mac) to select in any order
  * Also works when reorganizing the categories list! (multiple selection not included.)
- Create your categories and save them
  * After you create the categories, you can organize the items however you want
  * Items will be automatic sorted based on the game's internal id
  * If you delete a category, all items will be refunded to the "Items" list, on the right side
  * Remember to click on the "Floppy Disk" icon to save everything in the "User Preset"
  * Anyhow, all changes will still be saved in a buffer, but this buffer will be replaced if you change the Preset
- Automatic update!
  * When there's a Minecraft update (eg. 1.18 to 1.19), all the new items will be automatically added to the "Items" list
- Added Herobrine
