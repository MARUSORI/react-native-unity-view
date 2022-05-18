#if __has_include(<React/RCTViewManager.h>)
#import <React/RCTViewManager.h>
#else
#import "RCTViewManager.h"
#endif
#import <UnityFramework/UnityFramework.h>
#import "UnityUtils.h"
#import "RNUnityView.h"

@interface RNUnityViewManager : RCTViewManager

@property (nonatomic, strong) RNUnityView *currentView;

@end
