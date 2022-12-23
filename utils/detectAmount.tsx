/**
 * 
 * Example from Rema:
R 00
AS
Salgskvittering
REMA Sørenga.
Stian Aaboen AS
ORG NR. 917 794 197 MVA
Foretaksregisterset
TLF : 22 17 99 OG
04.12.72 15:19 Kasse: 001
Kvitt: 157208 Operr : 4834
Serienr. : 154204 I1d:000059-001
BANANER 15% 19,94
1,002kg x kr 19,90 å
LETTMELK 1,0 % 15% 19,90
NUGATTI 15% 28,90
LETTKOKTE HAVREGRY 15% 18,50
Sum 4 varer 87,24
BANK 87,24
Mvak Grunnlag Mva Totalt
15,00 75,656 11,38 87,24
2022-12-04 16:19
= | VAREK JØP NOK 87.24
P BankAxept PSN: 06
LT A , KONTAKTLØS
Å 00000 00 J00GX 111 75
TERM: 75221506-492677
BE NETSNO
F 644883
å ne å 5 eA KC1 : Parhee !
Fr 0 ATC: 00660 AED: 210401 o;
e an en B a AID: D5780000021010 A ) 31450
e ARC:00 STATUS : 000 ERR m
LA t a Autor1 sasjonskode 004289 5 KM S eE
åg DS LE REF : 492677 n mr
': : å å % Resul tat: Autorisert ; e * *
eØa Behold kvittering E ;
HEn vr l E KORTHOLDERS KOPI
! E : Fakk for handelen! .
! Å peg facebook , com/PEMA 1000
v ; Apninystider :
Å LY Man-Lør. 7-23
 */
const totalRegex = /(NOK\s\d+[,.]\d\d)|(\d+[,.]\d\d\s+NOK)/g;

export default function detectAmount(receiptText: string) {
  const result = receiptText.match(totalRegex) ?? [];

  const amounts = result.map((match) =>
    parseFloat(match.replace("NOK", "").trim())
  );

  return amounts.sort((a, b) => b - a).at(0);
}
