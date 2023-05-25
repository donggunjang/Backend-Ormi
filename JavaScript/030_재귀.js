`python

def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)

# n * (n-1) * (n-2) * ..... * 1
# 5 * 4 * 3 * 2 * 1 = 120
`

function factorial(n) {
    if(n <= 1){
        return 1
    }
    return n * factorial(n-1)
}

factorial(5)

// 즉시 실행함수