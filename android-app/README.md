# ICAV Time Tracker Android App v2

This is the v2 Android app for the ICAV Time Tracker application.

## Features
- ✅ Drive time tracking
- ✅ Driving-only entries
- ✅ DELETE functionality for time entries
- ✅ Enhanced sync with v2 server
- ✅ Improved UI/UX

## Requirements
- Android API 24+ (Android 7.0+)
- Android Studio Hedgehog | 2023.1.1
- Kotlin 1.9.0+

## Setup
1. Open the project in Android Studio
2. Sync Gradle files
3. Build and run

## v2 Compatibility
This app is designed to work with the v2 server schema that includes:
- Drive time columns (drive_start_time, drive_end_time)
- Nullable clock_in_time for driving-only entries
- DELETE endpoint for time entries

## Development
The app uses Jetpack Compose and follows MVVM architecture.
