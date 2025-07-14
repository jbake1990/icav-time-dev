# ICAV Time Tracker iOS App v2

This is the v2 iOS app for the ICAV Time Tracker application.

## Features
- ✅ Drive time tracking
- ✅ Driving-only entries
- ✅ DELETE functionality for time entries
- ✅ Enhanced sync with v2 server
- ✅ Improved UI/UX

## Requirements
- iOS 15.0+
- Xcode 15.0+
- Swift 5.9+

## Setup
1. Open `ICAV Time Tracker.xcodeproj` in Xcode
2. Configure your development team
3. Build and run

## v2 Compatibility
This app is designed to work with the v2 server schema that includes:
- Drive time columns (drive_start_time, drive_end_time)
- Nullable clock_in_time for driving-only entries
- DELETE endpoint for time entries

## Development
The app uses SwiftUI and follows MVVM architecture.
