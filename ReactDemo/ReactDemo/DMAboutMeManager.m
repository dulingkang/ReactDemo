//
//  DMAboutMeManager.m
//  ReactDemo
//
//  Created by ShawnDu on 16/7/6.
//  Copyright © 2016年 ShawnDu. All rights reserved.
//

#import "DMAboutMeManager.h"

@implementation DMAboutMeManager

RCT_EXPORT_MODULE();

- (NSDictionary *)constantsToExport {
    return @{@"version": [[NSBundle mainBundle] objectForInfoDictionaryKey:@"CFBundleShortVersionString"]};
}

//RCT_EXPORT_METHOD (version:(RCTResponseSenderBlock) callback) {
//    callback(@[[NSNull null], [[NSBundle mainBundle] objectForInfoDictionaryKey:@"CFBundleShortVersionString"]]);
//}
@end
