def presenteg():
    New_value = int(input("Insert New Value: "))
    Old_value = int(input("Insert Old Value: "))
    percentage_change = (New_value - Old_value) / Old_value * 100
    return f"{percentage_change} - this is the percentage change"

print(presenteg())



 
