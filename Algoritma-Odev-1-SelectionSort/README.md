# Selection Sort

[22,27,16,2,18,6] -> Insertion Sort

### >>> Yukarı verilen dizinin sort türüne göre aşamalarını yazınız.

1. Tüm elemanlar içinde en küçük eleman bulunup 0. indexe yazılır.

[<b>2</b>,22,27,16,18,6]

2. Index 0'dan sonraki üm elemanlar içinde en küçük eleman bulunup 1. indexe yazılır.

[<b>2</b>,<b>6</b>,22,27,16,18]

3. Index 1'den sonraki üm elemanlar içinde en küçük eleman bulunup 2. indexe yazılır.

[<b>2</b>,<b>6</b>,<b>16</b>22,27,18]

4. Index 2'den sonraki üm elemanlar içinde en küçük eleman bulunup 3. indexe yazılır.

[<b>2</b>,<b>6</b>,<b>16</b>,<b>18</b>,22,27]

5. Index 3'den sonraki üm elemanlar içinde en küçük eleman bulunup 4. indexe yazılır.

[<b>2</b>,<b>6</b>,<b>16</b>,<b>18</b>,<b>22</b>,27]

6. Index 4'den sonraki üm elemanlar içinde en küçük eleman bulunup 5. indexe yazılır.

[<b>2</b>,<b>6</b>,<b>16</b>,<b>18</b>,<b>22</b>,<b>27</b>]

### >>> Big-O gösterimini yazınız

N elemanlı bir diziyi sıralamak için ortalama olarak O(n^2) adım atılır.

### >>> Time Complexity: Dizi sıralandıktan sonra 18 sayısı aşağıdaki case'lerden hangisinin kapsamına girer? Yazınız

- Average case: Aradığımız sayının ortada olması
- Worst case: Aradığımız sayının sonda olması
- Best case: Aradığımız sayının dizinin en başında olması.

18 sayısı dizinin ortasında olduğu için Average Case kullanmak daha hızlı sonuç verir.

