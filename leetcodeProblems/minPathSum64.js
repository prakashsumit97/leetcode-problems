/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    let m = grid.length;
    let n = grid[0].length;

    let dp = new Array(m).fill(null).map(_ => new Array(n).fill(0));

    dp[0][0] = grid[0][0];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i == 0 && j == 0) {
                continue;
            } else {
                let result = 0;
                let left, right;
                if (i > 0 && j > 0) {
                    left = dp[i - 1][j];
                    right = dp[i][j - 1]
                    result = left > right ? right : left;
                } else if (i == 0) {
                    result = dp[i][j - 1];
                } else if (j == 0) {
                    result = dp[i - 1][j];
                }
                dp[i][j] = grid[i][j] + result;
            }
        }
    }
    return dp[m - 1][n - 1];
};


console.log(minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]))



// name - reshunewly@gmail.com
// password - Jawaan@2023


Raysteeds Energy Private Limited 97
Greenage Energy Solution" 25
Asset Infotech Limited 23
Bhumika Solar 39
Zivah International Private Limited 88

Mentor Water Experts Private Limited 109

GHAM Solar Solutions 116

VORTEX SOLAR ENERGY PRIVATE LIMITED 182

IVCM Star India Private Limited 105 5 rating
Himalaya age solar solution 49





GHAM Solar Solutions 116 done

VORTEX SOLAR ENERGY PRIVATE LIMITED 182 done


need to call: -

    IVCM Star India Private Limited 
Raysteeds Energy Private Limited
Himalaya age solar solution 180000





curl 'https://www.pmsuryaghar.gov.in/api/application/create' \
-H 'accept: application/json, text/plain, */*' \
-H 'accept-language: en-GB,en-US;q=0.9,en;q=0.8' \
-H 'authorization: Bearer U2FsdGVkX189qjQts5q8orGvWVE9yzabx9T6ceIR1Ubt1lBHRoI67jGdjLilMPVLieGTuNydp2y/M0FgdKJWt3vwxC2DTl49wFWsoASua1viP3dGtDuFQa5e++9udKpbO+VmICtGK1a6KxB8WPr68W3y+ZhXrGZW4BxUD+AeDwnyaX7U6qIlBuEp+XzLujYAmAdXhnE/39Rpbp8pnASXfXKneSM572IKRulziJavVZI=' \
-H 'content-type: application/json' \
-H 'cookie: AWSALB=SxP8hSxszJ2sqRTbADLP+9mn+dnqDDQdnWk8SkDfJVXoU2kkuAAMCSEkpmAwB4ERWP2pRCnDv8DCrmnQGP/QTVWpc0QVK0++bpkM08o/K2rJyZa4c9hLlpkberIKoI4snsHdAKTUhkh/izAil7vvwlQsQiAL8iq2ZstgWdqJU3BtFFYI+H0pj7G2UvOx0g==; AWSALBCORS=SxP8hSxszJ2sqRTbADLP+9mn+dnqDDQdnWk8SkDfJVXoU2kkuAAMCSEkpmAwB4ERWP2pRCnDv8DCrmnQGP/QTVWpc0QVK0++bpkM08o/K2rJyZa4c9hLlpkberIKoI4snsHdAKTUhkh/izAil7vvwlQsQiAL8iq2ZstgWdqJU3BtFFYI+H0pj7G2UvOx0g==' \
-H 'origin: https://www.pmsuryaghar.gov.in' \
-H 'priority: u=1, i' \
-H 'referer: https://www.pmsuryaghar.gov.in/consumer/applicationForm' \
-H 'sec-ch-ua: "Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"' \
-H 'sec-ch-ua-mobile: ?0' \
-H 'sec-ch-ua-platform: "Linux"' \
-H 'sec-fetch-dest: empty' \
-H 'sec-fetch-mode: cors' \
-H 'sec-fetch-site: same-origin' \
-H 'user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36' \
-H 'x-access-token: Bearer U2FsdGVkX189qjQts5q8orGvWVE9yzabx9T6ceIR1Ubt1lBHRoI67jGdjLilMPVLieGTuNydp2y/M0FgdKJWt3vwxC2DTl49wFWsoASua1viP3dGtDuFQa5e++9udKpbO+VmICtGK1a6KxB8WPr68W3y+ZhXrGZW4BxUD+AeDwnyaX7U6qIlBuEp+XzLujYAmAdXhnE/39Rpbp8pnASXfXKneSM572IKRulziJavVZI=' \
--data - raw '{"applicationId":"ExMl3JkNX9l3yF1QIPgCQAn39jgMl32Ml32"}'


UK07AF183
TMBBHGJX9G010938
CEV003921


// PixDiff.com

Your Ticket Number is: 
You can track the status of your ticket on: Contact us > Track Ticket on our home page https://www.pmsuryaghar.gov.in/

86234

286 


[2,3,1,2,4,3]

1,2,2,3,3,4

7-4=3
3:1



