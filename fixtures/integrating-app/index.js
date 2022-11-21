const { encrypt, decrypt } = require("openssl-napi");
const assert = require("assert");

assert(encrypt, "The expected function is undefined");
assert(decrypt, "The expected function is undefined");

function testEndToEnd() {
  const MESSAGE = "HELLO WORLD";

  const KEY_PAIR = `-----BEGIN CERTIFICATE-----
MIIELDCCApSgAwIBAgIIcsOElVeHzfQwDQYJKoZIhvcNAQELBQAwVzELMAkGA1UE
BhMCVUsxEjAQBgNVBAcMCVRlc3QgQ2l0eTEWMBQGA1UECgwNT3BlblNTTCBHcm91
cDEcMBoGA1UEAwwTVGVzdCBTL01JTUUgUm9vdCBDQTAgFw0xODA2MTQxMjQ2Mjha
GA8yMTE4MDYxNDEyNDYyOFowVjELMAkGA1UEBhMCVUsxJTAjBgNVBAMMHE9wZW5T
U0wgdGVzdCBTL01JTUUgc2lnbmVyIDExIDAeBgkqhkiG9w0BCQEWEXRlc3QxQG9w
ZW5zc2wub3JnMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA1vvSgaL1
byi9AE8Ep3v7Yv36JxYywaZhUy8dEFRiYn6NsVhhNo6SK1Mp8daQ0MZoMzbT1aKp
JTLTgDJZHit2t1d6l3aWJG+cbcLua+XKowaZjj6rirB390fuL4qt5PiAb571QFtu
L8apcydwGEdkaPRuCnvctN8VcZPTKh+M8VEESyxk5K37QYKaAB6ItWR5KhjiAuDt
zsJbjEtOvGtmu2FRCU47GzfkdjYo7tY38WTY+2WWh+idKErtmYSinmhE0H7+yoJB
s1VCI+cq5tVW+oEO9HF4vEDEUykEFFPsCEkIWM+RjCgK8cRSCpg6VQr+ZTii6k7C
m9CP81QhUoV3QwIDAQABo3sweTAJBgNVHRMEAjAAMCwGCWCGSAGG+EIBDQQfFh1P
cGVuU1NMIEdlbmVyYXRlZCBDZXJ0aWZpY2F0ZTAdBgNVHQ4EFgQUg1DE7OaNqMQQ
8Z1bvjhnlisxfsMwHwYDVR0jBBgwFoAUpJjGgWED0xBnKntZmlNiAzjC0HswDQYJ
KoZIhvcNAQELBQADggGBAGxAivCwPsAYmMZfVJTELWNNMBzKzmeRvrp6k/6S74Pw
LDEhTnslCV4U1gTSd3nQ+LRm1fkzxLA12A/rlqN51P8B+hyVSMN9dj54YUcFd+KO
XhkSDrSpph6hRqGy8zqELzlb1Q8yoIBclEmyv+CkXMrpnm+4JL4kzyj/iBRkZTDz
ns15jJD9KHgrOnclaoDRkOT6lGbsd3j+aviKEj8ZILufSMw+W2YORy3nSAencjbO
ezivVujqm+pjkfqdCS1HcFB7LhQEILfFqkssw8YmtJVrM9LF8VIcqueXbVZmeS/1
QV5B7OEmtsM+NkoLF5ldWdPQvmftbShh+AAlpcsmqiRefQgA3aQn6YOnOHnnQwgB
oQRNjQXsjgxV4t2HFYpwkK41kx4HToVGciPNMkndzfY/GJmgXsXfB6/AfUfhLTDv
tbws1MZhaCNOffw3/SVS2nLREMFCGn5uAgNkqssWqeWJu3910XF640tqPBj5YGFc
fykwWNhG5xS04EHpztgKdQ==
-----END CERTIFICATE-----
-----BEGIN RSA PRIVATE KEY-----
MIIEpQIBAAKCAQEA1vvSgaL1byi9AE8Ep3v7Yv36JxYywaZhUy8dEFRiYn6NsVhh
No6SK1Mp8daQ0MZoMzbT1aKpJTLTgDJZHit2t1d6l3aWJG+cbcLua+XKowaZjj6r
irB390fuL4qt5PiAb571QFtuL8apcydwGEdkaPRuCnvctN8VcZPTKh+M8VEESyxk
5K37QYKaAB6ItWR5KhjiAuDtzsJbjEtOvGtmu2FRCU47GzfkdjYo7tY38WTY+2WW
h+idKErtmYSinmhE0H7+yoJBs1VCI+cq5tVW+oEO9HF4vEDEUykEFFPsCEkIWM+R
jCgK8cRSCpg6VQr+ZTii6k7Cm9CP81QhUoV3QwIDAQABAoIBAQC6LCWmIisNcmgK
RmOvbszKc0sYYj7eOGl8EgbHR2xUA2hNNk4pYtnuLvzZ84hBZDCEeWyFS3HTRuql
z/QhDl6mc1k0pXtsXkNHQlIamksbVvHPnzIKzrt1J5N7FEt3SERhZXTZoNQRB6di
k7qdK+YmhdZtucnt0GrPisaJaf0yU/EjLuX+MU/0Xrc23lVhR3yqYhaOhWvrxTHM
evykI0kOL+gU58eN2eWE4ELjS2z+njKDqcEyeIy00FdBAtCoKjMsWpRytKNmcFm9
LdtMmizskF8VS3+XsDbkseIODx1xJ65IFmHHMV2xLG5/+bQppkB8JuE3EDrtFiUJ
lGdfmBlxAoGBAP3Asg0drdunv7imeEOGpyj5JwF1hCVQ71IBGdqTr3aPqOlDH/io
up7t+VBuSLqj1P20HygNjow+ALw/Ko+a0icodg7QA2Co0/RiBwa+u2SgpYDqC9Kt
KIdRcv+NXkhXF/DLIn0jJvI53OtKsbgTv/C+aCipblofnO9sF4AhShq1AoGBANjj
Ou0czloNORbk3qAxLi4b5P/YOyZBJDa0zijFdD1jImfOeyNFXeg2ID+8ZjDkP/eP
pLy/Gt/8bVb+O+9wMOho3kWKZBN3O2VsLJYakAehDsC5ax7i2HtEqg1L1krW2duS
POiKg3qNjETM30zTA4pHwkNAETIktResze7SRm0XAoGABH7KaLMS5mZFXjcMwF19
TpuDVmJHkgWqB7DfTWD6ZcZLvr4irdwHWlNq7ELX5P6MAmaTerkqwk9C4hLYZSzf
9jOgS8jhlm/HOXgXGcZ9OV4jMHJ0/Sl2I1eNCvvtJKjuUqS2mrLpuLbPtBdhqJoo
91HYNIgz3ULcG921WN6+GlUCgYEA066T6LDgxgt52NpwXrEhfWdETmDg+ilCCxLU
0/5DwVZsUhy5Gmeti+Kn/w0GQFnGBP1xr7ZlqI9auDlSjhNV6L/RkNXNbyJEGm1F
5wrt4ERVfcx6vJ5y43zU7D1EXa7s2t0UDXKDeK2GZe//UZ/yKJh5BeIV5nblOMI0
DA+3JOkCgYEA80QGLjGlCvxKceVbuohbIZ1+/EoXPq993ER9S8D2MTGATsEcygtF
rM8JcHTv75sjycqu68BAQr1Z5qwwrMyY0vWVEorKzvAXEWolC67asR4cDutOd+qy
WlEIyojX45GwHCHpcbVRiGRWuj3kwkc+WzdgusBoAJrPCigES/Cr8uA=
-----END RSA PRIVATE KEY-----`;

  const encryptionResult = encrypt(MESSAGE, KEY_PAIR);
  const decryptionResult = decrypt(encryptionResult, KEY_PAIR);

  assert.strictEqual(decryptionResult, MESSAGE, "Unexpected value returned");
}

assert.doesNotThrow(testEndToEnd, undefined, "testEndToEnd threw an expection");

console.log("Tests passed- everything looks OK!");
