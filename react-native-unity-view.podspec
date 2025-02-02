require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |s|
  s.name         = "react-native-unity-view"
  s.version      = package["version"]
  s.summary      = package["description"]
  s.homepage     = package["homepage"]
  s.license      = package["license"]
  s.authors      = package["author"]["name"]

  s.platforms    = { :ios => "10.0" }
  s.source       = { :git => "https://github.com/azesmway/react-native-unity-play-ts.git", :tag => "#{s.version}" }

  s.source_files = "ios/**/*.{h,m,mm}"

  s.xcconfig = { 'FRAMEWORK_SEARCH_PATHS' => '$(inherited) $(BUILD_ROOT)/** $(CONFIGURATION_BUILD_DIR)/../**' }

  s.dependency "React-Core"
end
