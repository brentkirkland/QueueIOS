//
//  FacebookLoginManager.m
//  QueueIOS
//
//  Created by Brent Kirkland on 7/14/15.
//  Copyright (c) 2015 Facebook. All rights reserved.
//

#import "FacebookLoginManager.h"
#import "FBSDKCoreKit/FBSDKCoreKit.h"
#import "FBSDKLoginKit/FBSDKLoginKit.h"

@implementation FacebookLoginManager

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(newSession:(RCTResponseSenderBlock)callback) {
    FBSDKLoginManager *login = [[FBSDKLoginManager alloc] init];
    [login logInWithReadPermissions:@[@"public_profile", @"email"] handler:^(FBSDKLoginManagerLoginResult *result, NSError *error) {
        
        if (error) {
            callback(@[@"Error", [NSNull null]]);
        } else if (result.isCancelled) {
            callback(@[@"Canceled", [NSNull null]]);
        } else {
            FBSDKAccessToken *token = result.token;
            NSString *tokenString = token.tokenString;
            NSString *userId = token.userID;
            NSDateFormatter *dateFormat = [[NSDateFormatter alloc] init];
            [dateFormat setDateFormat:@"yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"];
            NSString *expiration = [dateFormat stringFromDate:token.expirationDate];
            NSDictionary *credentials = @{ @"token" : tokenString, @"userId" : userId, @"tokenExpirationDate" :  expiration};
            callback(@[[NSNull null], credentials]);
        }
    }];
};

@end
