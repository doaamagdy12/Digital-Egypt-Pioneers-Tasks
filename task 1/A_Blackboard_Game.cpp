#include<iostream>
#include<string>
#include<vector>
#include<algorithm>
#include<unordered_map>
#define ll long long
#define mapii unordered_map<int,int>
#define vi vector<int>
#define vll vector<ll>
#define all(v) v.begin(), v.end()
using namespace std;
const int MOD = 1000000007;


void FastIO() { ios_base::sync_with_stdio(false); cin.tie(nullptr); }

void solve()
{

    int n; cin>>n;

    if(n%4==1 || n%4==2)
    cout<<"Alice\n";
    else
    cout<<"Bob\n";
}

int main()
{
    FastIO();

    int t;
    t=1;
    cin>>t;
    while (t--) solve();
   
    return 0;
}