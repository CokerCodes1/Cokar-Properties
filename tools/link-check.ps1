$pages = @('index.html','about.html','services.html','listings.html','marketplace.html','property-details.html','ai.html','payout.html')
$base = 'http://localhost/SHELTAR%20TECHNOLOGIES'
$results = @()
foreach ($p in $pages) {
    $u = "$base/$p"
    try {
        $resp = Invoke-WebRequest -Uri $u -UseBasicParsing -ErrorAction Stop
        Write-Host "Fetched $u (Status: $($resp.StatusCode))"
    } catch {
        Write-Host "Could not fetch $u: $($_.Exception.Message)"
        continue
    }

    $html = $resp.Content
    $matches = [regex]::Matches($html,'(?:href|src)\s*=\s*(?:"|\')(.*?)(?:"|\')')
    foreach ($m in $matches) {
        $link = $m.Groups[1].Value
        if ($link -match '^(mailto:|tel:|#|javascript:|https?:)') { continue }
        $link = $link.Trim()
        if ($link -like 'http*') { $full = $link }
        elseif ($link.StartsWith('/')) { $full = 'http://localhost' + $link }
        else { $full = "$base/" + $link.TrimStart('./') }

        # Try HEAD first, fall back to GET
        try {
            $chk = Invoke-WebRequest -Uri $full -Method Head -UseBasicParsing -ErrorAction Stop
            $status = $chk.StatusCode
        } catch {
            try {
                $chk2 = Invoke-WebRequest -Uri $full -Method Get -UseBasicParsing -ErrorAction Stop
                $status = $chk2.StatusCode
            } catch {
                $status = 'ERROR'
            }
        }

        if ($status -eq 'ERROR' -or ([int]$status -ge 400)) {
            $results += [pscustomobject]@{Page=$p; Link=$link; FullUrl=$full; Status=$status}
        }
    }
}

if ($results.Count -eq 0) { Write-Host 'No broken links found.' } else { Write-Host 'Broken links:'; $results | Format-Table -AutoSize }
