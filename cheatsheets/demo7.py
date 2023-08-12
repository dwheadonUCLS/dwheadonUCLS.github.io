import csv
f = open('some.csv', newline='')
reader = csv.reader(f)
for row in reader:
    print(row)