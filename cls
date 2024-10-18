[1mdiff --git a/package-lock.json b/package-lock.json[m
[1mindex d4ed70a..b5110f5 100644[m
[1m--- a/package-lock.json[m
[1m+++ b/package-lock.json[m
[36m@@ -8,9 +8,11 @@[m
       "name": "curso-cypress-v2",[m
       "version": "1.0.0",[m
       "license": "MIT",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@cypress/xpath": "^2.0.3"[m
[32m+[m[32m      },[m
       "devDependencies": {[m
[31m-        "cypress": "^9.5.1",[m
[31m-        "cypress-xpath": "^2.0.1"[m
[32m+[m[32m        "cypress": "^9.5.1"[m
       }[m
     },[m
     "node_modules/@colors/colors": {[m
[36m@@ -52,6 +54,12 @@[m
         "node": ">= 6"[m
       }[m
     },[m
[32m+[m[32m    "node_modules/@cypress/xpath": {[m
[32m+[m[32m      "version": "2.0.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@cypress/xpath/-/xpath-2.0.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-Seilxmws+yty5lZSbwbjEOOiEbr7O1bCxKy2FC4jwMssC22yjByb5orDfBZPLZXYfmWZafJjvZFwts4Q3CzQAg==",[m
[32m+[m[32m      "deprecated": "Package no longer supported. Contact Support at https://www.npmjs.com/support for more info."[m
[32m+[m[32m    },[m
     "node_modules/@cypress/xvfb": {[m
       "version": "1.2.4",[m
       "resolved": "https://registry.npmjs.org/@cypress/xvfb/-/xvfb-1.2.4.tgz",[m
[36m@@ -586,13 +594,6 @@[m
         "node": ">=12.0.0"[m
       }[m
     },[m
[31m-    "node_modules/cypress-xpath": {[m
[31m-      "version": "2.0.1",[m
[31m-      "resolved": "https://registry.npmjs.org/cypress-xpath/-/cypress-xpath-2.0.1.tgz",[m
[31m-      "integrity": "sha512-qMagjvinBppNJdMAkucWESP9aP4rDTs7c96m0vwMuZTVx3NqP2E3z/hkoRf8Ea9soL8yTvUuuyF1cg/Sb1Yhbg==",[m
[31m-      "deprecated": "Package no longer supported. Contact Support at https://www.npmjs.com/support for more info.",[m
[31m-      "dev": true[m
[31m-    },[m
     "node_modules/dashdash": {[m
       "version": "1.14.1",[m
       "resolved": "https://registry.npmjs.org/dashdash/-/dashdash-1.14.1.tgz",[m
[1mdiff --git a/package.json b/package.json[m
[1mindex 678fd91..f22b12a 100644[m
[1m--- a/package.json[m
[1m+++ b/package.json[m
[36m@@ -24,7 +24,9 @@[m
   "license": "MIT",[m
   "homepage": "https://github.com/wlsf82/cypress-basico-v2#readme",[m
   "devDependencies": {[m
[31m-    "cypress": "^9.5.1",[m
[31m-    "cypress-xpath": "^2.0.1"[m
[32m+[m[32m    "cypress": "^9.5.1"[m
[32m+[m[32m  },[m
[32m+[m[32m  "dependencies": {[m
[32m+[m[32m    "@cypress/xpath": "^2.0.3"[m
   }[m
 }[m
[1mdiff --git a/src/script.js b/src/script.js[m
[1mindex 9ae7d9b..9e52599 100644[m
[1m--- a/src/script.js[m
[1m+++ b/src/script.js[m
[36m@@ -36,7 +36,7 @@[m [mdocument.querySelector('button[type="submit"]')[m
       return showAndHideErrorMessage()[m
     }[m
     if (!emailField.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {[m
[31m-      return showAndHideErrorMessage()[m
[32m+[m[32m      // return showAndHideErrorMessage()[m
     }[m
     firstNameField.value = ''[m
     lastNameField.value = ''[m
